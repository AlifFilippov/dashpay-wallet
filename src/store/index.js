import thunk from 'redux-thunk';
import {
  createStore,
  compose,
  applyMiddleware,
} from 'redux';
import reducer from 'state/reducer';
import dpaTaskMiddlewareFactory from './middlewares/dpaTaskMiddlewareFactory';
import asyncTaskMiddleware from './middlewares/asyncTaskMiddleware';
import walletLib from './walletLib';

const extraArgument = thunk.withExtraArgument(walletLib);
const dpaTaskMiddleware = dpaTaskMiddlewareFactory(walletLib);
const enhancedMiddleware = applyMiddleware(
  asyncTaskMiddleware,
  dpaTaskMiddleware,
  extraArgument,
);
let composeEnhancers = compose;

/* eslint-disable */
if (__DEV__ && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}
/* eslint-enable */

const enhancer = composeEnhancers(enhancedMiddleware);
const store = createStore(reducer, enhancer);

export default store;
