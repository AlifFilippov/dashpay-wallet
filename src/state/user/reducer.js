import type { Action, User } from 'state/types';

export const initialState = {
  // Until we're ready to fetch the data for the current user.
  username: 'dashpayteamdev',
  avatarUrl: 'https://api.adorable.io/avatars/285/dashpayteamdev.png',
};

function user(state: User = initialState, action: Action): User {
  switch (action.type) {
    default:
      return state;
  }
}

export default user;
