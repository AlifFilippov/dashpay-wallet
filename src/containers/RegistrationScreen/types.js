// @flow
import type { NavigationProps } from 'types/navigation';
import type { Profile } from 'state/profiles/types';

export type Props = NavigationProps & {
  registerBUser: (username: string) => Promise<any>,
  registerProfile: (profile: Profile) => Promise<any>,
};
