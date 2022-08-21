// @flow
import { combineReducers } from 'redux';
import filterParams from './filterParams';
import items from './items';

export default combineReducers({
  filterParams,
  items,
});
