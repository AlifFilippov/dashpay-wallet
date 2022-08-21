// @flow
import React, { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import { connect } from 'react-redux';
import View from 'components/View';
import NavStatic from 'components/NavStatic';
import ProgressBar from 'components/ProgressBar';
import { Logo } from 'components';
import SpringProvider from './components/SpringProvider';
import ParallaxScrollView from './components/ParallaxScrollView';
import ProfilePic from './components/ProfilePic';
import IconBar from './components/IconBar';
import SlideUp from './components/SlideUp';
import FadeIn from './components/FadeIn';
import selector from './selectors';
import actions from './actions';
import styles from './styles';
import Activities from './components/Activities';
import type { Props } from './types';

const { height: viewportHeight } = Dimensions.get('window');

const renderLogo = () => (
  <FadeIn inputRange={[0, 0.5]} outputRange={[0, 1]}>
    <Logo style={styles.logo} />
  </FadeIn>
);

const HomeScreen = (props: Props) => {
  const {
    user,
    invalidateAlternativeCurrencyRate,
    fetchAlternativeCurrencyRateIfNeeded,
    getByBUsername,
    setDpaInitialized,
  } = props;
  const { username } = user;
  const [progress, setProgress] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    invalidateAlternativeCurrencyRate();
    fetchAlternativeCurrencyRateIfNeeded();
  }, []);

  const handleAnimationEnd = async (event) => {
    if (progress === 0 && event.finished) {
      try {
        const { initializeWallet } = props;
        await initializeWallet();
        setDpaInitialized();
        getByBUsername(username);
        return true;
      } finally {
        setProgress(100);
      }
    }
    return false;
  };

  const renderNavBar = () => (
    <FadeIn inputRange={[0, 1.75, 2]} outputRange={[0, 0, 1]} style={styles.navBar}>
      <NavStatic {...props} />
    </FadeIn>
  );

  const renderProgressBar = () => (
    <FadeIn inputRange={[0.5, 1, 1.5]} outputRange={[0, 1, 0]}>
      <ProgressBar onComplete={() => setComplete(true)} value={progress} />
    </FadeIn>
  );

  const renderProfilePic = () => (
    <FadeIn inputRange={[0, 1.5, 1.75]} outputRange={[0, 0, 1]}>
      <ProfilePic {...user} />
    </FadeIn>
  );

  const renderIconBar = () => (
    <FadeIn inputRange={[0, 1.75, 2]} outputRange={[0, 0, 1]}>
      <IconBar {...props} />
    </FadeIn>
  );

  const renderHeader = () => {
    const tmp = viewportHeight / 2 - 128;
    const slideUpProps = {
      inputRange: [0, 1.5, 1.75],
      outputRange: [tmp, tmp, 0],
    };
    return (
      <SlideUp style={styles.slideUp} {...slideUpProps}>
        {renderLogo()}
        {renderProgressBar()}
        {renderProfilePic()}
        {renderIconBar()}
        {renderNavBar()}
      </SlideUp>
    );
  };

  const renderBody = () => {
    if (complete) {
      return (
        <FadeIn inputRange={[0, 1.75, 2]} outputRange={[0, 0, 1]}>
          <Activities {...props} />
        </FadeIn>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <SpringProvider toValue={complete ? 2 : 1} onAnimationEnd={handleAnimationEnd}>
        <ParallaxScrollView renderHeader={renderHeader} renderBody={renderBody} />
      </SpringProvider>
    </View>
  );
};

export default connect(
  selector,
  actions,
)(HomeScreen);
