/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

export const FLAGS = {
  DASH: require('assets/flags/dash.png'),
  USD: require('assets/flags/usd.png'),
  EUR: require('assets/flags/eur.png')
};

export const FLAG_PLACEHOLDER = '';

export function flagUrl(countryCode) {
  return FLAGS[countryCode] ? FLAGS[countryCode] : FLAG_PLACEHOLDER;
}

// export function flagUrl(countryCode) {
//   try {
//     require(`assets/flags/${countryCode}.png`)
//     return FLAGS[countryCode];
//   } catch (e) {
//     return require(`assets/placeholder.png`)
//   }
// }

export default {
  flagUrl
};
