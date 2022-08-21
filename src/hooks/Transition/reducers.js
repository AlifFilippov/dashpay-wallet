/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

const UPDATE = 'UPDATE';
const ENTER = 'ENTER';
const ENTERING = 'ENTERING';
const ENTERED = 'ENTERED';
const EXIT = 'EXIT';
const EXITING = 'EXITING';
const EXITED = 'EXITED';

function items(state = [], action, { onEnter, onExit }) {
  switch (action.type) {
    case UPDATE: {
      const newState = [];

      const prevItems = state;
      const nextItems = action.payload;

      const prevKeys = prevItems.map(item => item.key);
      const nextKeys = nextItems.map(item => item.key);

      // const enteringKeys = new Set(nextKeys.filter(key => prevKeys.indexOf(key) === -1));
      const leavingKeys = new Set(prevKeys.filter(key => nextKeys.indexOf(key) === -1));

      nextItems.forEach(({ key, ...item }, index) => {
        newState.push(
          Object.assign(
            {},
            { item },
            {
              status: ENTER,
              key,
              index,
              getTransitionProps: onEnter,
              transitionStart: () => ({
                type: ENTERING,
                payload: key,
              }),
              transitionEnd: () => ({
                type: ENTERED,
                payload: key,
              }),
            },
          ),
        );
      });

      leavingKeys.forEach((key) => {
        const insertionIndex = prevKeys.indexOf(key);
        const { item } = prevItems[insertionIndex];

        newState.splice(
          insertionIndex,
          0,
          Object.assign(
            {},
            { item },
            {
              status: EXIT,
              index: insertionIndex,
              key,
              getTransitionProps: onExit,
              transitionStart: () => ({
                type: EXITING,
                payload: key,
              }),
              transitionEnd: () => ({
                type: EXITED,
                payload: key,
              }),
            },
          ),
        );
      });

      return newState;
    }

    case EXITED: {
      return state.filter(item => item.key !== action.payload);
    }

    default: {
      return state;
    }
  }
}

export default config => (state = {}, action) => ({
  items: items(state.items, action, config),
});
