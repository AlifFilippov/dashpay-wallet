/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import * as React from 'react';
import Form from 'components/Form';
import View from 'components/View';
import AutoSubmit from 'components/AutoSubmit';
import { SelectableList } from './components';
import { CameraButton } from './components';
import defaults from './defaults';
import styles from './styles';

function Screen(props: Props): ReactElement {
  return (
    <Form {...defaults} {...props}>
      {({ setFieldValue, values, errors }) => (
        <View style={styles.container}>
          <AutoSubmit />
          <View style={styles.body}>
            <View style={styles.section}>
              <SelectableList
                setFieldValue={setFieldValue}
                values={values}
                errors={errors}
                {...props}
              />
            </View>
          </View>
          <View style={styles.footer}>
            <CameraButton onPress={props.goToCameraScreen} />
          </View>
        </View>
      )}
    </Form>
  );
}

export default Screen;
