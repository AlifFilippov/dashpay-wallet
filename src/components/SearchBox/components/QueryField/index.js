// @flow
import * as React from 'react';
import {
  Input,
  Field,
} from 'components';
import styles from './styles';

function QueryField(props: any): React.Element<any> {
  return (
    <Field {...props}>
      {({ input }) => <Input {...input} style={[styles.input, props.style]} />}
    </Field>
  );
}

QueryField.defaultProps = {
  autoCapitalize: 'none',
  autoCorrect: false,
  clearButtonMode: 'always',
  editable: true,
  maxLength: 32,
  name: 'query',
  numberOfLines: 1,
  placeholder: 'Search…',
  spellCheck: false,
  underlineColorAndroid: 'white',
};

export default QueryField;
