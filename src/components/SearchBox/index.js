// @flow
import * as Yup from 'yup';
import * as React from 'react';
import {
  Form,
  View,
  AutoSubmit,
} from 'components';
import QueryField from './components/QueryField';
import type { Props } from './types';
import styles from './styles';

function SearchBox(props: Props): React.Element<any> {
  const { searchBox, style } = props;
  return (
    <Form {...props} ref={searchBox}>
      <AutoSubmit />
      <View style={styles.row}>
        <QueryField style={style} />
      </View>
    </Form>
  );
}

SearchBox.defaultProps = {
  validationSchema: Yup.object().shape({
    query: Yup.string().min(3),
  }),
};

export default SearchBox;
