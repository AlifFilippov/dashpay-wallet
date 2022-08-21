import logger from 'utils/logger';
import { currentUserSelector } from 'state/account/selectors';
import extractStatusTypes from './utils/extractStatusTypes';

class DpaTaskError extends Error {
  constructor(message) {
    super(message);
    this.code = 'DPATASKERROR';
    this.name = 'DpaError';
  }
}

const dpaTaskMiddlewareFactory = walletLib => store => next => (action) => {
  const { dpaTask } = action;
  if (typeof dpaTask !== 'function') {
    return next(action);
  }

  const {
    requestType,
    successType,
    failureType,
  } = extractStatusTypes(action.types);

  const actionWith = (data) => {
    const finalAction = Object.assign({}, action, data);
    delete finalAction.dpaTask;
    delete finalAction.types;
    return finalAction;
  };

  const { username } = currentUserSelector(store.getState());

  if (!walletLib.account || !walletLib.account.getDPA('dashpaydpa')) {
    const dpaNotInitializedError = new DpaTaskError('DPA is not initialized');
    next(actionWith({ type: failureType, dpaNotInitializedError }));
    return Promise.reject(dpaNotInitializedError);
  }

  const dashPayDpa = walletLib.account.getDPA('dashpaydpa');

  const getCurrentDpaProfile = async () => {
    const [profile] = await dashPayDpa.profile.getByBUsername(username);
    return profile;
  };

  next(actionWith({ type: requestType }));

  return new Promise((resolve, reject) => dpaTask({
    username, dashPayDpa, getCurrentDpaProfile,
  }).then(
    (response) => {
      next(actionWith({ type: successType, response }));
      resolve(response);
    },
    (error) => {
      logger.warn(error);
      next(actionWith({ type: failureType, error }));
      reject(error);
    },
  ).catch((error) => {
    logger.warn(error);
    next(actionWith({ type: failureType, error }));
    reject(error);
  }));
};

export default dpaTaskMiddlewareFactory;
