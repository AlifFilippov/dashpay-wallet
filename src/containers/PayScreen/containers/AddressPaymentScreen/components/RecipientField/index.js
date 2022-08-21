// @flow

import * as React from 'react';

import Field from 'components/Field';
import View from 'components/View';
import Input from 'components/Input';

import PasteButton from './components/PasteButton';
import defaultProps from './defaults';
import { fieldStyles } from './styles';
import type { Props } from './types';

let dismissPasteConfirmation = null;

function RecipientField(props: Props): React.Element<any> {
  return (
    <Field {...props} styles={fieldStyles}>
      {({ input, form, styles }) => {
        const { name, value } = input;
        const { showPasteConfirmation } = form.state;

        const confirm = showPasteConfirmation && value;
        const show = showPasteConfirmation || !value;

        function handlePaste(pastedValue: string) {
          form.setFieldTouched(name);
          form.setFieldValue(name, pastedValue);

          form.setFieldFocus(name);
          form.setState({
            showPasteConfirmation: true,
          });

          clearTimeout(dismissPasteConfirmation);
          dismissPasteConfirmation = setTimeout(() => {
            form.setState({
              showPasteConfirmation: false,
            });
          }, 4000);
        }

        function handleError(error: string) {
          form.setFieldTouched(name);
          form.setFieldError(name, error);
        }

        return (
          <View style={styles.container}>
            <View style={styles.body}>
              <Input {...input} />
            </View>
            <View style={styles.right}>
              <PasteButton
                onPaste={handlePaste}
                onError={handleError}
                confirm={confirm}
                show={show}
              />
            </View>
          </View>
        );
      }}
    </Field>
  );
}

RecipientField.defaultProps = defaultProps;

export default RecipientField;
