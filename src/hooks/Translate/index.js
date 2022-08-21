/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// TMP: This is temporary until we are able to use react-intl with hooks.

function useTranslate() {
  return (str = '', data = {}) => {
    const keys = Object.keys(data);

    if (!keys.length) {
      return str;
    }

    let newStr = str;

    keys.forEach((key) => {
      newStr = newStr.replace(`{{ ${key} }}`, data[key]);
    });

    return newStr;
  };
}

export default useTranslate;
