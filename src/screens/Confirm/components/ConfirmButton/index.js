/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import React, { useMemo } from 'react';
import { View, Text } from 'react-native';
import { useMachine } from '@xstate/react';
import posed, { Transition } from 'react-native-pose';

// Internal dependencies
import useTranslate from 'hooks/Translate';
import { SCREEN_WIDTH } from 'constants';
import Swipeable from './components/Swipeable';
import ProfilePicture from './components/ProfilePicture';
import Pulse from './components/Pulse';
import Dots from './components/Dots';
import payMachine from './useMachine';
import useStyles from './useStyles';

type Props = {
  onRequest: Function,
  onSuccess: Function,
  onFailure: Function,
  user: Object,
};

// This is a tmp until we find a final solution for this issue
// https://github.com/kmagiera/react-native-reanimated/issues/272
const SlideInOut = posed.View({
  enter: {
    x: 0,
    transition: () => ({
      type: 'keyframes',
      values: [-SCREEN_WIDTH, 0],
      duration: 1000,
    }),
  },
  exit: {
    x: 0,
    transition: () => ({
      type: 'keyframes',
      values: [0, SCREEN_WIDTH],
      duration: 1000,
    }),
  },
});

function SwipeButton({
  onRequest, onSuccess, onFailure, user,
}: Props) {
  const translate = useTranslate();
  const styles = useStyles();

  const memoMachine = useMemo(() => payMachine.withConfig({
    guards: {
      maxAttempts: ctx => ctx.attempts >= 3,
    },
    delays: {
      TIMEOUT: 3000,
    },
    actions: {
      animateNextTransition: () => {},
      handleSuccess: onSuccess,
      handleFailure: onFailure,
    },
    services: {
      sendPayment: onRequest,
    },
  }));

  const [state, send] = useMachine(memoMachine);

  function handleSwiped() {
    send('PAY');
  }

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        {state.matches('pending') && <Pulse opacity={0.35} />}
        <Transition>
          {(state.matches('idle') || state.matches('pending')) && (
            <SlideInOut key="item-1">
              <Swipeable onSwiped={handleSwiped} enabled={state.matches('idle')}>
                <View style={styles.button}>
                  <ProfilePicture user={user} />
                  <View style={styles.col}>
                    <Text style={styles.text}>
                      {translate(state.matches('idle') ? 'Slide to Pay' : 'SENDING')}
                    </Text>
                    {state.matches('pending') && (
                      <View style={styles.row}>
                        <Dots />
                      </View>
                    )}
                  </View>
                </View>
              </Swipeable>
            </SlideInOut>
          )}
          {state.matches({ fulfilled: 'success' }) && (
            <SlideInOut key="item-2">
              <View style={styles.feedback}>
                <Text style={styles.feedbackText}>{translate('Payment Sent')}</Text>
              </View>
            </SlideInOut>
          )}
          {state.matches({ rejected: 'retry' }) && (
            <SlideInOut key="item-3">
              <View style={styles.feedback}>
                <Text style={styles.feedbackText}>{translate('Something went wrong')}</Text>
              </View>
            </SlideInOut>
          )}
          {state.matches({ rejected: 'failure' }) && (
            <SlideInOut key="item-4">
              <View style={styles.feedback}>
                <Text style={styles.feedbackText}>{translate('Contact support')}</Text>
              </View>
            </SlideInOut>
          )}
        </Transition>
      </View>
    </View>
  );
}

export default SwipeButton;
