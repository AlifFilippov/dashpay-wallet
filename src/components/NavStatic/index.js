import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, SafeAreaView, TouchableOpacity,
} from 'react-native';
import { Icon } from 'components';
import Styles from 'components/Styles';
import { compose } from 'utilities';
import defaultStyles from './styles';

const Composed = compose([
  (props): React.Element<any> => <Styles {...props} styles={defaultStyles} />,
]);

class StaticNav extends React.PureComponent {
  render() {
    const { navigation, showMenu } = this.props;
    return (
      <Composed>
        {({ styles }) => (
          <SafeAreaView style={styles.container}>
            <View style={styles.body} />
            <View style={styles.right}>
              <SafeAreaView style={styles.container} pointerEvents="box-none">
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    navigation.navigate('Activities');
                  }}
                >
                  <Icon style={styles.icon} name="squiggle" />
                  <Text style={styles.text}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={showMenu}>
                  <Icon style={styles.icon} name="bars" />
                </TouchableOpacity>
              </SafeAreaView>
            </View>
          </SafeAreaView>
        )}
      </Composed>
    );
  }
}

StaticNav.propTypes = {
  showMenu: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default StaticNav;
