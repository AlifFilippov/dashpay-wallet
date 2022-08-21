import {
  PROFILES_CONTACT_REQUEST_ACCEPT_ASYNC,
  PROFILES_CONTACT_REQUEST_REJECT_ASYNC,
  PROFILES_CONTACT_REQUEST_SEND_ASYNC,
  PROFILES_GET_PENDING_REQUESTS_ASYNC,
} from 'state/action-types';

export const sendContactRequest = receiverUsername => dispatch => dispatch({
  username: receiverUsername,
  types: PROFILES_CONTACT_REQUEST_SEND_ASYNC,
  dpaTask: async ({ dashPayDpa, getCurrentDpaProfile }) => {
    const sender = await getCurrentDpaProfile();
    sender.buser.own(dashPayDpa.getBUserSigningPrivateKey());
    const [receiver] = await dashPayDpa.profile.getByBUsername(receiverUsername);
    return sender.contactRequest.create({ receiver }).send();
  },
});

export const getPendingContactRequests = () => dispatch => dispatch({
  types: PROFILES_GET_PENDING_REQUESTS_ASYNC,
  dpaTask: async ({ username, getCurrentDpaProfile }) => {
    try {
      const profile = await getCurrentDpaProfile();
      return profile.contactRequest.getAllPending();
    } catch (e) {
      if (e.name === 'BUserNotFoundError') {
        console.warn('BUserNotFound', username);
      } else {
        throw new Error(e);
      }
      return false;
    }
  },
});

export const acceptContactRequest = senderUsername => dispatch => dispatch({
  username: senderUsername,
  types: PROFILES_CONTACT_REQUEST_ACCEPT_ASYNC,
  dpaTask: async ({ getCurrentDpaProfile, dashPayDpa }) => {
    const profile = await getCurrentDpaProfile();
    profile.buser.own(dashPayDpa.getBUserSigningPrivateKey());
    const pendingContactRequests = await profile.contactRequest.getAllPending();
    const contactRequest = pendingContactRequests
      .received
      .find(({ sender: { buser } }) => buser.username === senderUsername);
    return profile.contactRequest.accept(contactRequest);
  },
});

export const rejectContactRequest = contact => dispatch => dispatch({
  contact,
  types: PROFILES_CONTACT_REQUEST_REJECT_ASYNC,
  async dpaTask() {
    // TODO: implement contact rejection
    return Promise.resolve(contact);
  },
});
