// @flow
import type { NavigationProps } from 'types/navigation';

interface Profile {
  avatarUrl: string,
}

export type Props = NavigationProps & {
  transactions: Array<Object>,
  alternativeCurrency: Object,
  fetchAlternativeCurrencyRateIfNeeded: Function,
  createSendPaymentTransaction: Function,
  receiver: Profile,
  sender: Profile,
  validationSchema: Object,
  initialValues: Object,
};

export type State = {};
