// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import {
  Animated,
  InteractionManager,
} from 'react-native';
import {
  Image,
  View,
} from 'components';
import ListEmpty from 'hooks/ContactList/ListEmpty';
import ActivityIndicatorView from 'hooks/ActivityIndicatorView';
import dashLogo from 'assets/flags/dash.png';
import actions from './actions';
import selector from './selectors';
import styles from './styles';
import type { Props, State } from './types';
import {
  ListFooter,
  ListHeader,
  Item,
} from './components';
import { SearchBox } from '../../components';

class ContactsScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    (this: any).renderItem = this.renderItem.bind(this);
    (this: any).renderListHeader = this.renderListHeader.bind(this);
    (this: any).renderListFooter = this.renderListFooter.bind(this);
    (this: any).renderListEmpty = this.renderListEmpty.bind(this);

    (this: any).handlePress = this.handlePress.bind(this);
    (this: any).handleSubmit = this.handleSubmit.bind(this);

    (this: any).searchBox = React.createRef();

    this.scrollPos = new Animated.Value(0);
    this.scrollSinkY = Animated.event(
      [{ nativeEvent: { contentOffset: { y: this.scrollPos } } }],
      { useNativeDriver: true },
    );
    this.state = {
      isSearching: false,
      isFetchingContacts: true,
    };
  }

  componentDidMount() {
    const { getContacts } = this.props;
    getContacts()
      .finally(() => this.setState({ isFetchingContacts: false }));
  }

  componentWillUnmount() {
    const { clearFilter } = this.props;
    clearFilter();
  }

  async handlePress(params: string) {
    const { navigation } = this.props;
    navigation.navigate('ContactScreen', params);
    await InteractionManager.runAfterInteractions();
    if (this.searchBox.current.resetForm) {
      this.searchBox.current.setFieldValue('query', '');
      this.searchBox.current.submitForm();
    }
  }

  handleSubmit(values: Object) {
    const { setFilter, searchProfiles } = this.props;
    const query = values.query.trim();
    this.setState({ isSearching: true });
    setFilter({ query });
    searchProfiles(query)
      .finally(() => this.setState({ isSearching: false }));
  }

  renderListFooter() {
    return <ListFooter {...this.props} />;
  }

  renderItem({ item }: { item: Object }) {
    return <Item {...item} onPress={this.handlePress} />;
  }

  renderListHeader = props => (<ListHeader {...props} />);

  renderListEmpty() {
    return <ListEmpty {...this.props} />;
  }

  renderBody() {
    const { isSearching, isFetchingContacts } = this.state;
    const { sections } = this.props;
    const isActiveRequest = isSearching || isFetchingContacts;
    if (isActiveRequest && sections.length === 0) {
      return <ActivityIndicatorView />;
    }
    return (
      <Animated.SectionList
        contentContainerStyle={styles.contentContainer}
        renderSectionHeader={this.renderListHeader}
        ListFooterComponent={this.renderListFooter}
        ListEmptyComponent={this.renderListEmpty}
        keyExtractor={({ username }) => username}
        sections={sections}
        renderItem={this.renderItem}
        onScroll={this.scrollSinkY}
      />
    );
  }

  render() {
    const animatedStyle = {
      transform: [
        {
          translateY: this.scrollPos.interpolate({
            inputRange: [0, 150],
            outputRange: [0, -150],
            extrapolateRight: 'clamp',
            extrapolateLeft: 'clamp',
          }),
        },
      ],
    };
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          {this.renderBody()}
        </View>
        <Animated.View style={[styles.header, animatedStyle]}>
          <View style={[styles.row, styles.first]}>
            <Image
              style={styles.dash}
              source={dashLogo}
            />
          </View>
          <View style={[styles.row, styles.second]}>
            <SearchBox
              {...this.props}
              searchBox={this.searchBox}
              onSubmit={this.handleSubmit}
            />
          </View>
        </Animated.View>
      </View>
    );
  }
}

export default connect(
  selector,
  actions,
)(ContactsScreen);
