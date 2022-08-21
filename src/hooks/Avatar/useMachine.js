import { useMemo } from 'react';
import { Machine, assign } from 'xstate';
import { useMachine } from '@xstate/react';

// We should soon have 'createUseMachine' custom hook.
// Work in progress working to simplify this file
const setUser = assign((context, event) => {
  const { avatarUrl = '', username = '' } = event.payload;
  const letter = username.charAt(0).toUpperCase();

  return {
    avatarUrl,
    letter,
  };
});

const machine = Machine({
  id: 'avatar',
  initial: 'idle',
  states: {
    idle: {
      on: {
        '': [
          {
            target: 'image',
            cond: 'hasImage',
          },
          {
            target: 'text',
            cond: 'hasDisplayName',
          },
          {
            target: 'icon',
          },
        ],
      },
    },
    image: {
      on: {
        RESET: {
          target: 'idle',
          actions: setUser,
        },
        FAILURE: [
          {
            target: 'text',
            cond: 'hasDisplayName',
          },
          {
            target: 'icon',
          },
        ],
      },
    },
    text: {
      on: {
        RESET: {
          target: 'idle',
          actions: setUser,
        },
      },
    },
    icon: {
      on: {
        RESET: {
          target: 'idle',
          actions: setUser,
        },
      },
    },
  },
});

export default (props) => {
  const { user = {} } = props;
  const { avatarUrl = '', username = '' } = user;
  const letter = username.charAt(0).toUpperCase();

  const memoMachine = useMemo(
    () => machine
      .withConfig({
        guards: {
          hasDisplayName: ctx => !!ctx.letter,
          hasImage: ctx => !!ctx.avatarUrl,
        },
      })
      .withContext({
        avatarUrl,
        letter,
      }),
    [],
  );

  return useMachine(memoMachine);
};
