/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Internal dependencies
import ThemeProvider from './ThemeProvider';

function Theme({ theme, themes, ...rest }) {
  const [state] = useState(() => ({ theme, themes }));
  return <ThemeProvider value={state} {...rest} />;
}

Theme.defaultProps = {
  theme: 'blue',
  themes: {},
};

Theme.propTypes = {
  theme: PropTypes.string,
  themes: PropTypes.shape({
    [PropTypes.string]: PropTypes.object,
  }),
};

export default Theme;
