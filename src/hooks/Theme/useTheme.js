/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */

// External dependencies
import { useContext } from 'react';

// Internal dependencies
import ThemeContext from './ThemeContext';

function useTheme() {
  return useContext(ThemeContext);
}

export default useTheme;
