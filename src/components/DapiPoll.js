// @flow
import React from 'react';
import Interval from 'hooks/Interval';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import { dpaIsInitializedSelector } from 'state/account/selectors';
import {
  getContacts,
  getPendingContactRequests,
} from 'state/profiles/actions';

type Props = {
  getPendingRequestsAction: Function,
  getContactsAction: Function,
  dpaIsInitialized: Boolean,
};

const DapiPoll = ({
  dpaIsInitialized,
  getPendingRequestsAction,
  getContactsAction,
}: Props) => {
  if (!dpaIsInitialized) {
    return null;
  }
  const pollActions = {
    contacts: {
      action: getContactsAction,
    },
    pendingRequests: {
      action: getPendingRequestsAction,
    },
  };
  return Object.keys(pollActions).map(actionName => (
    <Interval
      callback={pollActions[actionName].action}
      delay={pollActions[actionName].delay || 10000}
      key={`DapiPoll_${actionName}`}
    />
  ));
};

const actions = (dispatch: Function): Object => bindActionCreators({
  getPendingRequestsAction: getPendingContactRequests,
  getContactsAction: getContacts,
}, dispatch);

const selectors = createSelector(
  dpaIsInitializedSelector,
  dpaIsInitialized => ({
    dpaIsInitialized,
  }),
);

export default connect(selectors, actions)(DapiPoll);
