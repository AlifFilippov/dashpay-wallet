/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 */

// External dependencies
import * as React from 'react';
import PropTypes from 'prop-types';

import {
  FlatList, TouchableHighlight, View, Text,
} from 'react-native';

import { ThemeConsumer } from 'hooks/Theme';

const COLOR_PALETTES = [
  '#FF8B04',
  '#FFA403',
  '#FEB904',
  '#FF7B04',
  '#FF9505',
  '#FFA202',
  '#F65C01',
  '#FA6D01',
  '#FF8003',
  '#CE3018',
  '#DD3F22',
  '#E7452E',
  '#991D51',
  '#B7245B',
  '#CC285B',
  '#59188C',
  '#70219B',
  '#8129A4',
  '#342197',
  '#472EA4',
  '#5435AC',
  '#192A87',
  '#263A99',
  '#2B45A6',
  '#0044A7',
  '#005BBE',
  '#056BD0',
  '#015098',
  '#0267B7',
  '#0578CB',
  '#034758',
  '#03596E',
  '#027997',
  '#124321',
  '#1B542C',
  '#226034',
];

const styles = {
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    padding: 32,
  },
  row: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 16,
    marginTop: 30,
    flexGrow: 1,
    flexShrink: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  input: {
    borderRadius: 16,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#f0f0f0',
    color: '#666',
    flex: 1,
    fontSize: 17,
    height: 50,
  },
  avetar: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 64,
    backgroundColor: 'red',
    height: 64,
    borderRadius: 32,
    borderWidth: 0,
    borderColor: 'red',
    alignSelf: 'center',
  },
  firstInitial: {
    color: '#fff',
    fontSize: 24,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: 39,
  },
};

function Item(props) {
  const { onChange, color } = props;
  return (
    <TouchableHighlight
      onPress={() => onChange(color)}
      style={[styles.card, { backgroundColor: color }]}
    >
      <View style={[styles.card, { backgroundColor: color }]} />
    </TouchableHighlight>
  );
}

Item.propTypes = {
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

class ColorPicker extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
  };

  onChange = (color) => {
    const { onChange } = this.props;
    if (onChange) onChange(color);
  };

  render() {
    return (
      <FlatList
        data={COLOR_PALETTES}
        style={{ flex: 1 }}
        numColumns={3}
        columnWrapperStyle={{ height: 39 }}
        keyExtractor={item => item}
        renderItem={({ item }) => <Item color={item} onChange={this.onChange} />}
        ListHeaderComponent={() => (
          <React.Fragment>
            <ThemeConsumer>
              {({ setTheme }) => (
                <TouchableHighlight
                  onPress={() => setTheme('blue')}
                  style={[styles.card, { backgroundColor: '#088BE2' }]}
                >
                  <Text style={{ color: '#fff' }}>Blue</Text>
                </TouchableHighlight>
              )}
            </ThemeConsumer>
            <ThemeConsumer>
              {({ setTheme }) => (
                <TouchableHighlight
                  onPress={() => setTheme('red')}
                  style={[styles.card, { backgroundColor: '#CA2C2D' }]}
                >
                  <Text style={{ color: '#fff' }}>Red</Text>
                </TouchableHighlight>
              )}
            </ThemeConsumer>
            <ThemeConsumer>
              {({ setTheme }) => (
                <TouchableHighlight
                  onPress={() => setTheme('dark')}
                  style={[styles.card, { backgroundColor: '#000' }]}
                >
                  <Text style={{ color: '#fff' }}>Dark</Text>
                </TouchableHighlight>
              )}
            </ThemeConsumer>
          </React.Fragment>
        )}
        ListFooterComponent={() => (
          <TouchableHighlight {...this.props} style={[styles.card, { backgroundColor: '#000' }]}>
            <Text style={{ color: '#fff' }}>Close</Text>
          </TouchableHighlight>
        )}
      />
    );
  }
}

export default ColorPicker;
