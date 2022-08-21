import {
  PROFILES_SET_FILTER,
  PROFILES_CLEAR_FILTER,
} from 'state/action-types';

const initialState = {
  query: '',
  isActive: false,
};

const isActive = ({ query }) => query
  && query.trim() !== initialState.query;

const filterParams = (state = initialState, action) => {
  switch (action.type) {
    case PROFILES_SET_FILTER:
      return {
        ...initialState,
        ...action.filterParams,
        isActive: isActive(action.filterParams),
      };
    case PROFILES_CLEAR_FILTER:
      return { ...initialState };

    default:
      return state;
  }
};

export default filterParams;
