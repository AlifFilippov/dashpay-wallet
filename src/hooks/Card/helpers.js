/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// Internal dependencies
import TXTYPES from 'constants/txtypes';

export function getTitle(translate, sender) {
  if (sender.displayName) {
    return sender.displayName;
  }
  if (sender.username) {
    return sender.username;
  }
  return translate('Dash Address');
}

export function getSubtitle(translate, type, receiver) {
  if (type === TXTYPES.RECEIVED) {
    return translate('Paid Me');
  }
  if (receiver.displayName) {
    return translate('Paid {{ displayName }}', receiver);
  }
  if (receiver.username) {
    return translate('Paid {{ username }}', receiver);
  }
  return translate('Paid Dash Address');
}

export function getAddress(translate, type, sender, receiver) {
  if (type === TXTYPES.SENT) {
    return translate('To {{ address }}', receiver);
  }
  return translate('From {{ address }}', sender);
}
