/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { Animated } from 'react-native';
import { View } from 'react-native';
import defaultAnimations from './animations';
import Driver from './drivers';
import defaultProps from './props';
import initialState from './state';
import shallowEqual from 'fbjs/lib/shallowEqual';
import { merge } from 'lodash';
import { forEach } from 'lodash';
import { pick } from 'lodash';
import { keys } from 'lodash';

const Reanimatable = Animated.createAnimatedComponent(View);

class ReanimatableComponent extends React.PureComponent<Props, State> {
  static defaultProps = defaultProps;
  static initialState = initialState;

  constructor(props: Props) {
    super(props);

    const { animations, children, driver, style, ...configs } = props;
    this.driver = driver instanceof Driver ? driver : driver(configs);

    this.state = this.constructor.initialState;
    this.animations = merge(defaultAnimations, animations);

    forEach(this.animations, (animationFunc, animationName) => {
      (this: any)[animationName] = this.animate.bind(this, animationName);
    });

    (this: any).handleOnLayout = this.handleOnLayout.bind(this);
    (this: any).startAnimation = this.startAnimation.bind(this);
    (this: any).resetAnimation = this.resetAnimation.bind(this);
    (this: any).stopAnimation = this.stopAnimation.bind(this);
  }

  handleOnLayout(event: Object): void {
    const { layout: prevLayout } = this.state;
    const { layout: nextLayout } = event.nativeEvent;

    if (!shallowEqual(prevLayout, nextLayout)) {
      this.setState({ layout: nextLayout });
    }
  }

  getAnimationStyles(animationName: string): Object {
    const { driver } = this;
    const { layout } = this.state;
    return this.animations[animationName](driver, this.state.layout);
  }

  getAnimationPropsFromDriver(): Object {
    return this.driver.getAnimationProps();
  }

  getAnimationConfigsFromProps(): Object {
    return pick(this.props, keys(this.driver.configs));
  }

  animate(animationName: string, animationConfigs: Object): Promise {
    return new Promise((resolve, reject) => {
      this.setAnimation(animationName, _ => {
        this.startAnimation(animationConfigs, resolve);
      });
    });
  }

  setAnimation(animationName: string, callback: Function) {
    const animationStyles = this.getAnimationStyles(animationName);
    const animationProps = this.getAnimationPropsFromDriver();
    this.setState({ animationStyles, animationProps }, callback);
  }

  startAnimation(animationConfigs: Object, callback?: Function): void {
    const propsConfigs = this.getAnimationConfigsFromProps();
    const mergeConfigs = merge(propsConfigs, animationConfigs);
    this.driver.startAnimation(mergeConfigs, callback);
  }

  resetAnimation(): void {
    this.driver.resetAnimation();
  }

  stopAnimation(): void {
    this.driver.stopAnimation();
  }

  render(): React.Element<any> {
    const { animationStyles } = this.state;
    const { animationProps } = this.state;
    const { style } = this.props;
    return (
      <Reanimatable
        {...animationProps}
        onLayout={this.handleOnLayout}
        style={[style, animationStyles]}>
        {this.props.children}
      </Reanimatable>
    );
  }
}

export default ReanimatableComponent;
