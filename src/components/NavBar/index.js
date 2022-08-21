// @flow
import React from 'react';
import { TouchableOpacity, View, SafeAreaView } from 'react-native';
import Text from 'components/Text';
import Icon from 'components/Icon';
import Styles from 'components/Styles';
import { compose } from 'utilities';
import type { NavigationProps } from 'types/navigation';
import defaultStyles from './styles';

export const Composed = compose([props => <Styles {...props} styles={defaultStyles} />]);


type Props = NavigationProps & {
  showMenu: Function,
  scene: {
    descriptor: {
      options: {
        title: string,
      }
    },
  },
};

const NavBar = ({ scene, navigation, showMenu }: Props) => {
  const { options } = scene.descriptor;
  const { title = '' } = options;
  return (
    <Composed>
      {({ styles }) => (
        <SafeAreaView style={styles.container}>
          <View style={styles.body}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
              <Icon style={styles.icon} name="chevron-left" />
            </TouchableOpacity>
            <View style={styles.wrapper}>
              <Text style={styles.title} numberOfLines={1}>
                {title}
              </Text>
            </View>
          </View>
          <View style={styles.right}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate('ActivitiesScreen');
              }}
            >
              <Icon style={styles.icon} name="squiggle" />
              <Text style={styles.text}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={showMenu}>
              <Icon style={styles.icon} name="bars" />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      )}
    </Composed>
  );
};

export default NavBar;
