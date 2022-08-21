// @flow
import React from 'react';
import {
  Animated, Easing, StyleSheet, View, BackHandler,
} from 'react-native';
import { createAppContainer, StackRouter, createNavigator } from 'react-navigation';
import { Transitioner } from 'react-navigation-stack';
import NavBar from 'components/NavBar';
import type { NavigationProps } from 'types/navigation';
import routes from './routes';
import MainMenu from './MainMenu';
import { forVertical } from './config';

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#fff',
    borderColor: '#fff',
    position: 'absolute',
    overflow: 'hidden',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  header: {},
  body: {
    position: 'relative',
    overflow: 'hidden',
    flex: 1,
  },
});

type Props = NavigationProps & {
  descriptors: Object,
  scene: {
    descriptor: Object,
  },
};

type State = {
  height: number,
  active: Boolean,
};

class CustomNavigationView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
    this.state = {
      height: 0,
      active: false,
    };
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.onBackPressed);
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  showMenu = () => {
    this.setState(
      {
        active: true,
      },
      () => {
        Animated.spring(this.animatedValue, {
          toValue: 1,
        }).start();
      },
    );
  };

  hideMenu = () => {
    this.setState(
      {
        active: true,
      },
      () => {
        Animated.spring(this.animatedValue, {
          toValue: 0,
        }).start();
      },
    );
  };

  onBackPressed = () => false; // return true if we want to override back behavior

  configureTransition = () => ({
    duration: 200,
    easing: Easing.out(Easing.ease),
  });

  renderScenes = (transitionProps) => {
    const scenes = transitionProps.scenes.map(scene => this.renderScene(transitionProps, scene));
    return <View style={{ flex: 1 }}>{scenes}</View>;
  };

  onLayout = (event) => {
    const { height: prevHeight } = this.state;
    const { height: nextHeight } = event.nativeEvent.layout;

    if (prevHeight !== nextHeight) {
      this.setState({ height: nextHeight });
    }
  };

  renderScene = (transitionProps, scene) => {
    const { index } = scene;

    const animation = forVertical({
      ...transitionProps,
      scene,
    });

    const Scene = scene.descriptor.getComponent();
    const { active, height } = this.state;

    return (
      <Animated.View key={index} style={[styles.view, animation]} onLayout={this.onLayout}>
        <Animated.View
          style={[
            styles.view,
            { height },
            {
              transform: [
                {
                  translateY: this.animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-height, 0],
                    extrapolateLeft: 'clamp',
                    useNativeDriver: true,
                  }),
                },
              ],
            },
          ]}
        >
          <MainMenu
            navigation={scene.descriptor.navigation}
            showMenu={this.showMenu}
            hideMenu={this.hideMenu}
            active={active}
          />
        </Animated.View>
        <Animated.View
          style={[
            styles.view,
            { height },
            {
              transform: [
                {
                  translateY: this.animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, height],
                    extrapolateLeft: 'clamp',
                    useNativeDriver: true,
                  }),
                },
              ],
            },
          ]}
        >
          {scene.descriptor.options.header && (
            <View style={styles.header}>
              <NavBar
                scene={scene}
                navigation={scene.descriptor.navigation}
                showMenu={this.showMenu}
              />
            </View>
          )}
          <View style={styles.body}>
            <Scene
              navigation={scene.descriptor.navigation}
              showMenu={this.showMenu}
              hideMenu={this.hideMenu}
              active={active}
            />
          </View>
        </Animated.View>
      </Animated.View>
    );
  };

  render() {
    const { navigation, descriptors } = this.props;

    return (
      <Transitioner
        configureTransition={this.configureTransition}
        descriptors={descriptors}
        navigation={navigation}
        render={this.renderScenes}
      />
    );
  }
}

const CustomRouter = StackRouter(routes);

const CustomTransitioner = createAppContainer(
  createNavigator(CustomNavigationView, CustomRouter, {}),
);

export default CustomTransitioner;
