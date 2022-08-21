// @flow
import * as React from 'react';
import Field from 'components/Field';
import View from 'components/View';
import Text from 'components/Text';
import Icon from 'components/Icon';
import AmountInput from 'hooks/AmountInput';
import fieldStyles from './styles';

function AmountField(props): React.Element<any> {
  return (
    <React.Fragment>
      <Field {...props} name="dashAmount" styles={fieldStyles}>
        {({
          input, form, styles, theme,
        }) => {
          function handleChangeText(dashAmount) {
            const fiatAmount = form.convertToFiatAmount(dashAmount);

            form.setFieldTouched('dashAmount');
            form.setFieldValue('dashAmount', dashAmount);

            form.setFieldTouched('fiatAmount');
            form.setFieldValue('fiatAmount', fiatAmount);
          }
          return (
            <View style={styles.container}>
              <View style={styles.separator} />
              <View style={styles.left}>
                <Text style={styles.text}>DASH</Text>
              </View>
              <View style={styles.body}>
                <Icon style={styles.icon} name="dash" />
              </View>
              <View style={styles.right}>
                <AmountInput
                  {...input}
                  placeholderTextColor={theme.fieldInputColor}
                  onChangeText={handleChangeText}
                  style={styles.input}
                />
              </View>
            </View>
          );
        }}
      </Field>
      <Field {...props} name="fiatAmount" styles={fieldStyles}>
        {({
          input, form, styles, theme,
        }) => {
          function handleChangeText(fiatAmount) {
            const dashAmount = form.convertToDashAmount(fiatAmount);

            form.setFieldTouched('fiatAmount');
            form.setFieldValue('fiatAmount', fiatAmount);

            form.setFieldTouched('dashAmount');
            form.setFieldValue('dashAmount', dashAmount);
          }
          return (
            <View style={styles.container}>
              <View style={styles.left}>
                <Text style={styles.text}>USD</Text>
              </View>
              <View style={styles.body}>
                <Icon style={styles.icon} name="usd" />
              </View>
              <View style={styles.right}>
                <AmountInput
                  {...input}
                  placeholderTextColor={theme.fieldInputColor}
                  onChangeText={handleChangeText}
                  precision={2}
                  onSubmitEditing={form.submitForm}
                  style={styles.input}
                />
              </View>
            </View>
          );
        }}
      </Field>
    </React.Fragment>
  );
}

export default AmountField;
