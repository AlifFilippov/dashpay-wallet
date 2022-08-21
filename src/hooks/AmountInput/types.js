// @flow
export type Props = {
  style: ?Object,
  value: ?string,
  i18n: {
    formatNumber: Function,
  },
  precision: ?number,
  onChangeText: Function,
  getRef: ?Function,
  onSubmitEditing: ?Function,
};
