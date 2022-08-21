import {
  PROFILES_GET_CONTACTS_ASYNC,
} from 'state/action-types';

export const getContacts = () => dispatch => dispatch({
  types: PROFILES_GET_CONTACTS_ASYNC,
  dpaTask: async ({ getCurrentDpaProfile }) => {
    const profile = await getCurrentDpaProfile();
    return profile.contact.getAll();
  },
});
