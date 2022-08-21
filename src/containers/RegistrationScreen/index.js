// @flow
import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Alert,
  Button,
  View,
  Text,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Formik, Field } from 'formik';
import type { Profile } from 'state/profiles/types';
import { sample } from 'lodash';
import Avatar from 'hooks/Avatar';
import InputField from './InputField';
import schema from './schema';
import useStyles from './useStyles';
import type { Props } from './types';
import peopleMock from './peopleMock';
import actions from './actions';

const RegistrationScreen = ({
  navigation,
  registerBUser,
  registerProfile,
}: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const registerProfileDelayed = profile => new Promise(
    (resolve, reject) => setTimeout(
      () => registerProfile(profile).then(resolve, reject), 2000,
    ),
  );

  const handleSubmitForm = (props: Profile) => {
    setIsSubmitting(true);
    const { username } = props;
    registerBUser(username)
      .then(() => {
        Alert.alert('BUser registration - success');
        registerProfileDelayed(props)
          .then(
            () => Alert.alert('Profile registration - success'),
            error => Alert.alert(`Profile registration error: ${error.message}`),
          );
      },
      error => Alert.alert(`BUser registration error: ${error.message}`))
      .finally(() => setIsSubmitting(false));
  };

  const goHome = () => navigation.reset([NavigationActions.navigate({ routeName: 'HomeScreen' })]);

  const initialValues = sample(peopleMock);
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <Text style={styles.header}>Registration</Text>
      </View>
      <Formik
        initialValues={initialValues}
        isInitialValid={schema.isValidSync(initialValues)}
        onSubmit={handleSubmitForm}
        validationSchema={schema}
      >
        {({
          values,
          handleSubmit,
          isValid,
        }) => (
          <View>
            <View style={styles.block}>
              <Avatar user={values} />
            </View>
            <Field style={styles.block} name="username" placeholder="Username" component={InputField} />
            <Field style={styles.block} name="avatarUrl" placeholder="Avatar url" component={InputField} />
            <View style={styles.block}>
              <Button
                style={styles.button}
                title="Submit"
                onPress={handleSubmit}
                disabled={!isValid || isSubmitting}
                loading={isSubmitting}
                loadingProps={{ size: 'large', color: 'white' }}
              />
              <Button title="Go home" onPress={goHome} />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default connect(null, actions)(RegistrationScreen);
