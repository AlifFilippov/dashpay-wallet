/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import { IntlProvider } from 'react-intl';
import { addLocaleData } from 'react-intl';
import { connect } from 'react-redux';
import selector from './selectors';
import type { ReactElement } from 'types';
import type { Props } from './types';

class LanguageProvider extends React.Component<Props> {
  render(): ReactElement {
    const { locale, translations } = this.props;
    const messages = translations[locale];
    return (
      <IntlProvider locale={locale} messages={messages}>
        {React.Children.only(this.props.children)}
      </IntlProvider>
    );
  }
}

const connectedLanguageProvider = connect(selector)(LanguageProvider);

export { connectedLanguageProvider as LanguageProvider };
