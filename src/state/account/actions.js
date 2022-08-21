// @flow
import { Wallet } from '@dashevo/wallet-lib';
import {
  ACCOUNTS_ACCOUNT_CREATED,
  ACCOUNTS_GET_UNUSED_ADDRESS,
  ACCOUNTS_CHANGE_NETWORK_ASYNC,
  ACCOUNTS_SET_MNEMONIC,
  ACCOUNTS_SET_USERNAME,
  ACCOUNTS_REGISTER_BUSER_ASYNC,
  ACCOUNTS_SET_DPA_INITIALIZED,
} from 'state/action-types';

/**
 * Will set all data to be rechecked again forcing syncWorker to rescan all tx and addr.
 * @return Promise<bool>
 */
export const forceRefreshAccount = () => (
  dispatch, getState, { account },
) => dispatch({
  types: ACCOUNTS_CHANGE_NETWORK_ASYNC,
  asyncTask: () => account.forceRefreshAccount(),
});

/**
 * Will switch the current network of the active account.
 * @param networkName - default : testnet
 * @return Promise<bool>
 */
export const changeNetwork = (networkName: string) => (
  dispatch, getState, { account },
) => dispatch({
  types: ACCOUNTS_CHANGE_NETWORK_ASYNC,
  asyncTask: () => account.updateNetwork(networkName),
});

/**
 * Will get a new unused address to get payments
 * @param type - enum - The type of address we are looking (internal, misc..), default : external.
 * @return Promise<string> - txid
 */
export const getUnusedAddress = (type = 'external') => (
  dispatch, getState, { account },
) => dispatch({
  type: ACCOUNTS_GET_UNUSED_ADDRESS,
  unusedAddress: account.getUnusedAddress(type).address,
});

export const createAccount = () => (dispatch, getState) => {
  const state = getState();
  const { network, transport } = state.account;
  const wallet = new Wallet({
    network,
    transport,
  });
  const mnemonic = wallet.exportWallet();
  dispatch({
    type: ACCOUNTS_ACCOUNT_CREATED,
    mnemonic,
  });
};

export const registerBUser = (username: string) => dispatch => dispatch({
  username,
  types: ACCOUNTS_REGISTER_BUSER_ASYNC,
  dpaTask: async ({ dashPayDpa }) => {
    const buser = dashPayDpa.buser.create(username);
    buser.own(dashPayDpa.getBUserSigningPrivateKey());
    await buser.synchronize();
    return buser.register();
  },
});

export const setMnemonic = (mnemonic: string) => ({
  type: ACCOUNTS_SET_MNEMONIC,
  mnemonic,
});

export const setUsername = (username: string) => ({
  type: ACCOUNTS_SET_USERNAME,
  username,
});

export const setDpaInitialized = () => ({
  type: ACCOUNTS_SET_DPA_INITIALIZED,
});
