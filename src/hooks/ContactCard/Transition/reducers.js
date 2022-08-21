/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import { combineReducers } from 'redux';

function items(state = [], action) {
  switch (action.type) {
    case 'UPDATE': {
      const newState = [];

      const prevItems = state;
      const nextItems = action.payload;

      const prevKeys = prevItems.map(item => item.key);
      const nextKeys = nextItems.map(item => item.key);

      const enteringKeys = new Set(nextKeys.filter(key => prevKeys.indexOf(key) === -1));

      const leavingKeys = new Set(prevKeys.filter(key => nextKeys.indexOf(key) === -1));

      nextItems.forEach((item) => {
        if (enteringKeys.has(item.key)) {
          newState.push(Object.assign({}, item, { status: 'entering' }));
        } else {
          newState.push(item);
        }
      });

      leavingKeys.forEach((key) => {
        const insertionIndex = prevKeys.indexOf(key);
        const item = prevItems[insertionIndex];

        newState.splice(insertionIndex, 0, Object.assign({}, item, { status: 'leaving' }));
      });

      return newState;
    }

    case 'LEAVE': {
      return state.filter(item => item.key !== action.payload.key);
    }

    default: {
      return state;
    }
  }
}

export default combineReducers({
  items,
});
