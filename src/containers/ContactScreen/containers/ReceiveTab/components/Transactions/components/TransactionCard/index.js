// @flow
import * as React from 'react';
import { FormattedTime, FormattedNumber } from 'react-intl';

import Card from 'components/Card';
import Avatar from 'hooks/Avatar';
import Touchable from 'components/Touchable';
import View from 'components/View';
import Text from 'components/Text';
import Icon from 'components/Icon';
import type { Props } from './types';

const TransactionCard = (props: Props) => {
  const {
    item: {
      dashAmount, fiatAmount, receiver, sender, timestamp,
    },
  } = props;
  const fiatSymbol = 'usd';
  return (
    <Card onPress={() => {}}>
      {({ bind, styles }) => (
        <View style={styles.tmp}>
          <Touchable {...bind}>
            <View style={styles.container}>
              <View style={styles.header}>
                <View style={styles.row}>
                  <View style={styles.avatar}>
                    <Avatar xs user={sender} />
                  </View>
                  <View style={styles.metadata}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                      <Text style={styles.title} numberOfLines={1}>
                        {sender.username}
                      </Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                      <Text style={styles.subtitle} numberOfLines={1}>
                        {sender.username}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.body}>
                <View style={styles.highlighted}>
                  <View style={styles.row}>
                    <View style={styles.avatar}>
                      <Avatar xs user={receiver} />
                    </View>
                    <View style={styles.metadata}>
                      <View style={styles.row}>
                        <Icon style={styles.icon} name={fiatSymbol} />
                        <FormattedNumber value={fiatAmount}>
                          {value => <Text style={styles.text}>{value}</Text>}
                        </FormattedNumber>
                      </View>
                      <View style={styles.row}>
                        <Icon style={styles.icon} name="dash" />
                        <FormattedNumber value={dashAmount}>
                          {value => <Text style={styles.text}>{value}</Text>}
                        </FormattedNumber>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.footer}>
                <FormattedTime
                  value={timestamp}
                  year="numeric"
                  month="long"
                  day="numeric"
                >
                  {formattedTime => (
                    <Text style={styles.small}>
                      Payed |
                      {formattedTime}
                    </Text>
                  )}
                </FormattedTime>
              </View>
            </View>
          </Touchable>
        </View>
      )}
    </Card>
  );
};

export default TransactionCard;
