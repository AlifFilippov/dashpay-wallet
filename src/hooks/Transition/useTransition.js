import { useReducer, useEffect } from 'react';
import makeReducer from './reducers';

const initState = {
  items: [],
};

function useTransition(items, config) {
  const reducer = makeReducer(config);
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(
    () => {
      dispatch({
        type: 'UPDATE',
        payload: items,
      });
    },
    [items],
  );

  return {
    items: state.items,
    dispatch,
  };
}

export default useTransition;
