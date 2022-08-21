import { Animated, Easing } from 'react-native';
import { BaseDriver } from './BaseDriver';

export class ScrollDriver extends BaseDriver {
  constructor(options = {}) {
    super(options);

    this.onLayout = this.onLayout.bind(this);
    this.onScroll = this.onScroll.bind(this);

    this.scrollViewProps = {
      onScroll: Animated.event(
        [
          {
            nativeEvent: {
              contentOffset: {
                y: this.value
              }
            }
          }
        ],
        {
          useNativeDriver: true
        }
      ),
      scrollEventThrottle: 1
    };
  }

  onLayout(event) {
    return event.nativeEvent.layout;
  }

  onScroll(event) {
    return Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              y: this.value
            }
          }
        }
      ],
      {
        useNativeDriver: true
      }
    );
  }
}
