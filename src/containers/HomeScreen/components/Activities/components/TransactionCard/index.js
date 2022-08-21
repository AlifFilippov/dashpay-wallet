// @flow
import React, { useState } from 'react';
import { Alert } from 'react-native';
import Card from 'components/Card';
import Touchable from 'components/Touchable';
import View from 'components/View';
import { PROFILE_STATES } from 'state/profiles/constants';
import Header from './Header';
import ActionsBody from './ActionsBody';
import Footer from './Footer';
import Loader from './Loader';
import type { Props } from './types';

const TransactionCard = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    acceptContactRequest,
    rejectContactRequest,
    item,
  } = props;
  const { username, state } = item;

  const performActionFactory = action => () => {
    setIsLoading(true);
    return action(username).then(
      () => { Alert.alert('Success'); },
      error => Alert.alert(`Error: ${error.message}`),
    ).finally(() => setIsLoading(false));
  };

  const handlePressAccept = performActionFactory(acceptContactRequest);

  const handlePressReject = () => {
    Alert.alert(
      'Reject Contact Request',
      `Are you sure you want to reject the contact request from ${username}?`,
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: performActionFactory(rejectContactRequest),
        },
      ],
      { cancelable: false },
    );
  };

  return (
    <Card onPress={() => {}}>
      {({ bind, styles }) => (
        <View style={styles.tmp}>
          <Touchable {...bind}>
            <View style={styles.container}>
              <Header item={item} styles={styles} />
              {state !== PROFILE_STATES.CONTACT && (
                <ActionsBody
                  {...item}
                  handlePressAccept={handlePressAccept}
                  handlePressReject={handlePressReject}
                  styles={styles}
                />
              )}
              <Footer {...item} styles={styles} />
              {isLoading && (<Loader />)}
            </View>
          </Touchable>
        </View>
      )}
    </Card>
  );
};

export default TransactionCard;
