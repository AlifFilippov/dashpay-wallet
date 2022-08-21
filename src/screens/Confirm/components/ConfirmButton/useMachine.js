/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import { Machine, assign } from 'xstate';

const machine = Machine({
  id: 'pay',
  context: {
    attempts: 0,
  },
  initial: 'idle',
  states: {
    idle: {
      entry: ['animateNextTransition'],
      on: {
        PAY: 'pending',
      },
    },
    pending: {
      onEntry: assign({
        attempts: ctx => ctx.attempts + 1,
      }),
      invoke: {
        src: 'sendPayment',
        onDone: {
          target: 'fulfilled',
        },
        onError: {
          target: 'rejected',
        },
      },
    },
    fulfilled: {
      initial: 'success',
      entry: ['animateNextTransition'],
      states: {
        success: {
          after: {
            TIMEOUT: {
              actions: ['handleSuccess'],
            },
          },
          type: 'final',
        },
      },
    },
    rejected: {
      initial: 'can retry',
      states: {
        'can retry': {
          on: {
            '': [
              {
                target: 'failure',
                cond: 'maxAttempts',
              },
              {
                target: 'retry',
              },
            ],
          },
        },
        retry: {
          entry: ['animateNextTransition'],
          after: {
            TIMEOUT: '#pay.idle',
          },
        },
        failure: {
          entry: ['animateNextTransition'],
          after: {
            TIMEOUT: {
              actions: ['handleFailure'],
            },
          },
          type: 'final',
        },
      },
    },
  },
});

export default machine;
