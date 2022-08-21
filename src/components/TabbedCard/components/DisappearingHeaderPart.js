import * as React from 'react';
import {
  View,
  Animated,
} from 'react-native';

class DisappearingHeaderPart extends React.Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Animated.View style={{
        overflow: 'hidden',
        position: 'relative',
        height: this.props.scrolledDistance.interpolate({
          inputRange: [0, this.props.initialHeight*1],
          outputRange: [this.props.initialHeight, 0],
          extrapolate: 'clamp'
        })
      }}>
        <View style={{position: 'absolute', bottom: 0}}>
          {this.props.children}
        </View>
      </Animated.View>
    );
  }
}

export default DisappearingHeaderPart;
