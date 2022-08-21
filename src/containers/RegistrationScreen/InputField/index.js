// @flow
import React from 'react';
import { Text, TextInput, View } from 'react-native';
import type { FormikProps } from 'formik';
import type { Profile } from 'state/profiles/types';
import useStyles from './useStyles';

type Props = FormikProps<null, Profile>;

const InputField = ({
  field,
  form: {
    touched,
    errors,
    handleChange,
    setFieldTouched,
  },
  ...props
}: Props) => {
  const styles = useStyles();
  const { name } = field;
  const validationError = touched[name] && errors[name] ? errors[name] : ' ';
  return (
    <View style={styles.container}>
      <TextInput
        {...field}
        {...props}
        style={styles.textInput}
        onChangeText={handleChange(name)}
        onFocus={() => setFieldTouched(name)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Text style={styles.validationError}>{validationError}</Text>
    </View>
  );
};

export default InputField;
