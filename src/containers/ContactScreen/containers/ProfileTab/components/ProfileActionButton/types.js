// @flow
import type { Profile } from 'state/profiles/types';

export type Props = Profile & {
  sendContactRequest: (username: string) => Promise<any>,
  acceptContactRequest: (username: string) => Promise<any>,
};
