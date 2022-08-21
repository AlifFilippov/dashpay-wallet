/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';
import { Button } from 'components';
import { Scale } from 'components';
import { Spinner } from 'components';
import { Icon } from 'components';
import { TouchableHighlight } from 'react-native';
import { View as Box } from 'react-native';
import { View as Row } from 'react-native';
import { View as Left } from 'react-native';
import { View as Body } from 'react-native';
import { View as Right } from 'react-native';
import { FadeIn } from 'components';
import { Interval } from 'components';

const initialState = {
  ['default']: false,
  ['request']: false,
  ['success']: false,
  ['failure']: false,
  ['active']: false
};

export class PrimaryButtonSuccess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
      default: true
    };
  }

  _onPress = e => {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.setState(state => {
      if (state.default) {
        this.intervalId = setInterval(this._onPress, 12000);
        return {
          ...initialState,
          request: true,
          active: true
        };
      }
      if (state.request) {
        this.intervalId = setInterval(this._onPress, 6000);
        return {
          ...initialState,
          success: true
        };
      }
      if (state.success) {
        return {
          ...initialState,
          default: true
        };
      }
    });
  };

  render() {
    const { props } = this;
    const { state } = this;
    return (
      <Button onPress={this._onPress} primary {...props} {...state}>
        {({ bind, styles, touched }) => (
          <Scale toValue={touched ? 0.95 : 1}>
            <TouchableHighlight style={styles.box} {...bind}>
              <Box style={styles.box}>
                <Row style={styles.row}>
                  <Left style={styles.left} />
                  <Body style={styles.body}>
                    {state.default && (
                      <FadeIn style={styles.fadeIn}>
                        <Text style={styles.text}>{'Send Payment'}</Text>
                      </FadeIn>
                    )}
                    {state.request && (
                      <Interval delay={3000}>
                        {({ times }) => (
                          <Row style={styles.row}>
                            {times % 2 === 0 && (
                              <FadeIn style={styles.fadeIn}>
                                <Text style={styles.text}>
                                  {'Processing transaction'}
                                </Text>
                              </FadeIn>
                            )}
                            {times % 2 === 1 && (
                              <FadeIn style={styles.fadeIn}>
                                <Text style={styles.text}>{'Please wait'}</Text>
                              </FadeIn>
                            )}
                          </Row>
                        )}
                      </Interval>
                    )}
                    {state.success && (
                      <Interval delay={3000}>
                        {({ times }) => (
                          <Row style={styles.row}>
                            {times === 0 && (
                              <FadeIn style={styles.fadeIn}>
                                <Text style={styles.text}>
                                  {'Transaction succeeded'}
                                </Text>
                              </FadeIn>
                            )}
                            {times !== 0 && (
                              <FadeIn style={styles.fadeIn}>
                                <Text style={styles.text}>{'Thank You'}</Text>
                              </FadeIn>
                            )}
                          </Row>
                        )}
                      </Interval>
                    )}
                  </Body>
                  <Right style={styles.right}>
                    {state.default && (
                      <FadeIn style={styles.fadeIn}>
                        <Icon style={styles.icon} name={'send'} />
                      </FadeIn>
                    )}
                    {state.request && (
                      <FadeIn style={styles.fadeIn}>
                        <Spinner style={styles.icon} size={24} color="#fff" />
                      </FadeIn>
                    )}
                  </Right>
                </Row>
              </Box>
            </TouchableHighlight>
          </Scale>
        )}
      </Button>
    );
  }
}

export class PrimaryButtonFailure extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
      default: true
    };
  }

  _onPress = e => {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.setState(state => {
      if (state.default) {
        this.intervalId = setInterval(this._onPress, 12000);
        return {
          ...initialState,
          request: true,
          active: true
        };
      }
      if (state.request) {
        this.intervalId = setInterval(this._onPress, 6000);
        return {
          ...initialState,
          failure: true
        };
      }
      if (state.failure) {
        return {
          ...initialState,
          default: true
        };
      }
    });
  };

  render() {
    const { props } = this;
    const { state } = this;
    return (
      <Button onPress={this._onPress} primary {...props} {...state}>
        {({ bind, styles, touched }) => (
          <Scale toValue={touched ? 0.95 : 1}>
            <TouchableHighlight style={styles.box} {...bind}>
              <Box style={styles.box}>
                <Row style={styles.row}>
                  <Left style={styles.left} />
                  <Body style={styles.body}>
                    {state.default && (
                      <FadeIn style={styles.fadeIn}>
                        <Text style={styles.text}>{'Send Payment'}</Text>
                      </FadeIn>
                    )}
                    {state.request && (
                      <Interval delay={3000}>
                        {({ times }) => (
                          <Row style={styles.row}>
                            {times % 2 === 0 && (
                              <FadeIn style={styles.fadeIn}>
                                <Text style={styles.text}>
                                  {'Processing transaction'}
                                </Text>
                              </FadeIn>
                            )}
                            {times % 2 === 1 && (
                              <FadeIn style={styles.fadeIn}>
                                <Text style={styles.text}>{'Please wait'}</Text>
                              </FadeIn>
                            )}
                          </Row>
                        )}
                      </Interval>
                    )}
                    {state.failure && (
                      <Interval delay={3000}>
                        {({ times }) => (
                          <Row style={styles.row}>
                            {times === 0 && (
                              <FadeIn style={styles.fadeIn}>
                                <Text style={styles.text}>
                                  {'Transaction failed'}
                                </Text>
                              </FadeIn>
                            )}
                            {times !== 0 && (
                              <FadeIn style={styles.fadeIn}>
                                <Text style={styles.text}>
                                  {'Please try again'}
                                </Text>
                              </FadeIn>
                            )}
                          </Row>
                        )}
                      </Interval>
                    )}
                  </Body>
                  <Right style={styles.right}>
                    {state.default && (
                      <FadeIn style={styles.fadeIn}>
                        <Icon style={styles.icon} name={'send'} />
                      </FadeIn>
                    )}
                    {state.request && (
                      <FadeIn style={styles.fadeIn}>
                        <Spinner style={styles.icon} size={24} color="#fff" />
                      </FadeIn>
                    )}
                  </Right>
                </Row>
              </Box>
            </TouchableHighlight>
          </Scale>
        )}
      </Button>
    );
  }
}

export class SecondaryButtonSuccess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
      default: true
    };
  }

  _onPress = e => {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.setState(state => {
      if (state.default) {
        this.intervalId = setInterval(this._onPress, 12000);
        return {
          ...initialState,
          request: true,
          active: true
        };
      }
      if (state.request) {
        this.intervalId = setInterval(this._onPress, 6000);
        return {
          ...initialState,
          success: true
        };
      }
      if (state.success) {
        return {
          ...initialState,
          default: true
        };
      }
    });
  };

  render() {
    const { props } = this;
    const { state } = this;
    return (
      <Button onPress={this._onPress} secondary {...props} {...state}>
        {({ bind, styles, touched }) => (
          <Scale toValue={touched ? 0.95 : 1}>
            <TouchableHighlight style={styles.box} {...bind}>
              <Box style={styles.box}>
                <Row style={styles.row}>
                  <Left style={styles.left} />
                  <Body style={styles.body}>
                    {state.default && (
                      <FadeIn style={styles.fadeIn}>
                        <Text style={styles.text}>{'Send Payment'}</Text>
                      </FadeIn>
                    )}
                    {state.request && (
                      <Interval delay={3000}>
                        {({ times }) => (
                          <Row style={styles.row}>
                            {times % 2 === 0 && (
                              <FadeIn style={styles.fadeIn}>
                                <Text style={styles.text}>
                                  {'Processing transaction'}
                                </Text>
                              </FadeIn>
                            )}
                            {times % 2 === 1 && (
                              <FadeIn style={styles.fadeIn}>
                                <Text style={styles.text}>{'Please wait'}</Text>
                              </FadeIn>
                            )}
                          </Row>
                        )}
                      </Interval>
                    )}
                    {state.success && (
                      <Interval delay={3000}>
                        {({ times }) => (
                          <Row style={styles.row}>
                            {times === 0 && (
                              <FadeIn style={styles.fadeIn}>
                                <Text style={styles.text}>
                                  {'Transaction succeeded'}
                                </Text>
                              </FadeIn>
                            )}
                            {times !== 0 && (
                              <FadeIn style={styles.fadeIn}>
                                <Text style={styles.text}>{'Thank You'}</Text>
                              </FadeIn>
                            )}
                          </Row>
                        )}
                      </Interval>
                    )}
                  </Body>
                  <Right style={styles.right}>
                    {state.default && (
                      <FadeIn style={styles.fadeIn}>
                        <Icon style={styles.icon} name={'send'} />
                      </FadeIn>
                    )}
                    {state.request && (
                      <FadeIn style={styles.fadeIn}>
                        <Spinner
                          style={styles.icon}
                          size={24}
                          color="#053273"
                        />
                      </FadeIn>
                    )}
                  </Right>
                </Row>
              </Box>
            </TouchableHighlight>
          </Scale>
        )}
      </Button>
    );
  }
}

export class SecondaryButtonFailure extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
      default: true
    };
  }

  _onPress = e => {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.setState(state => {
      if (state.default) {
        this.intervalId = setInterval(this._onPress, 12000);
        return {
          ...initialState,
          request: true,
          active: true
        };
      }
      if (state.request) {
        this.intervalId = setInterval(this._onPress, 6000);
        return {
          ...initialState,
          failure: true
        };
      }
      if (state.failure) {
        return {
          ...initialState,
          default: true
        };
      }
    });
  };

  render() {
    const { props } = this;
    const { state } = this;
    return (
      <Button onPress={this._onPress} secondary {...props} {...state}>
        {({ bind, styles, touched }) => (
          <Scale toValue={touched ? 0.95 : 1}>
            <TouchableHighlight style={styles.box} {...bind}>
              <Box style={styles.box}>
                <Row style={styles.row}>
                  <Left style={styles.left} />
                  <Body style={styles.body}>
                    {state.default && (
                      <FadeIn style={styles.fadeIn}>
                        <Text style={styles.text}>{'Send Payment'}</Text>
                      </FadeIn>
                    )}
                    {state.request && (
                      <Interval delay={3000}>
                        {({ times }) => (
                          <Row style={styles.row}>
                            {times % 2 === 0 && (
                              <FadeIn style={styles.fadeIn}>
                                <Text style={styles.text}>
                                  {'Processing transaction'}
                                </Text>
                              </FadeIn>
                            )}
                            {times % 2 === 1 && (
                              <FadeIn style={styles.fadeIn}>
                                <Text style={styles.text}>{'Please wait'}</Text>
                              </FadeIn>
                            )}
                          </Row>
                        )}
                      </Interval>
                    )}
                    {state.failure && (
                      <Interval delay={3000}>
                        {({ times }) => (
                          <Row style={styles.row}>
                            {times === 0 && (
                              <FadeIn style={styles.fadeIn}>
                                <Text style={styles.text}>
                                  {'Transaction failed'}
                                </Text>
                              </FadeIn>
                            )}
                            {times !== 0 && (
                              <FadeIn style={styles.fadeIn}>
                                <Text style={styles.text}>
                                  {'Please try again'}
                                </Text>
                              </FadeIn>
                            )}
                          </Row>
                        )}
                      </Interval>
                    )}
                  </Body>
                  <Right style={styles.right}>
                    {state.default && (
                      <FadeIn style={styles.fadeIn}>
                        <Icon style={styles.icon} name={'send'} />
                      </FadeIn>
                    )}
                    {state.request && (
                      <FadeIn style={styles.fadeIn}>
                        <Spinner
                          style={styles.icon}
                          size={24}
                          color="#053273"
                        />
                      </FadeIn>
                    )}
                  </Right>
                </Row>
              </Box>
            </TouchableHighlight>
          </Scale>
        )}
      </Button>
    );
  }
}

export class SecondaryButtonAll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
      default: true
    };
  }

  _onPress = e => {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.setState(state => {
      if (state.default) {
        this.intervalId = setInterval(this._onPress, 30000);
        return {
          ...initialState,
          request: true,
          active: true
        };
      }
    });
  };

  render() {
    const { props } = this;
    const { state } = this;
    return (
      <Button onPress={this._onPress} secondary {...props} {...state}>
        {({ bind, styles, touched }) => {
          return (
            <Scale toValue={touched ? 0.95 : 1}>
              <TouchableHighlight style={styles.box} {...bind}>
                <Box style={styles.box}>
                  {state.default && (
                    <Row style={styles.row}>
                      <Left style={styles.left} />
                      <Body style={styles.body}>
                        <FadeIn style={styles.fadeIn}>
                          <Text style={styles.text}>{'Show regions'}</Text>
                        </FadeIn>
                      </Body>
                      <Right style={styles.right} />
                    </Row>
                  )}
                  {state.request && (
                    <Interval delay={1500}>
                      {({ times }) => (
                        <Row style={styles.row}>
                          <Left style={styles.left}>
                            {times === 0 && (
                              <FadeIn style={styles.fadeIn}>
                                <Icon style={styles.icon} name={'send'} />
                              </FadeIn>
                            )}
                            {times === 3 && (
                              <FadeIn style={styles.fadeIn}>
                                <Spinner
                                  style={styles.icon}
                                  size={24}
                                  color="#053273"
                                />
                              </FadeIn>
                            )}
                            {times >= 6 && (
                              <FadeIn style={styles.fadeIn}>
                                <Text style={styles.text}>{'Left'}</Text>
                              </FadeIn>
                            )}
                          </Left>
                          <Body style={styles.body}>
                            {times === 1 && (
                              <FadeIn style={styles.fadeIn}>
                                <Icon style={styles.icon} name={'send'} />
                              </FadeIn>
                            )}
                            {times === 4 && (
                              <FadeIn style={styles.fadeIn}>
                                <Spinner
                                  style={styles.icon}
                                  size={24}
                                  color="#053273"
                                />
                              </FadeIn>
                            )}
                            {times >= 7 && (
                              <FadeIn style={styles.fadeIn}>
                                <Text style={styles.text}>{'Body'}</Text>
                              </FadeIn>
                            )}
                          </Body>
                          <Right style={styles.right}>
                            {times === 2 && (
                              <FadeIn style={styles.fadeIn}>
                                <Icon style={styles.icon} name={'send'} />
                              </FadeIn>
                            )}
                            {times === 5 && (
                              <FadeIn style={styles.fadeIn}>
                                <Spinner
                                  style={styles.icon}
                                  size={24}
                                  color="#053273"
                                />
                              </FadeIn>
                            )}
                            {times >= 8 && (
                              <FadeIn style={styles.fadeIn}>
                                <Text style={styles.text}>{'Right'}</Text>
                              </FadeIn>
                            )}
                          </Right>
                        </Row>
                      )}
                    </Interval>
                  )}
                </Box>
              </TouchableHighlight>
            </Scale>
          );
        }}
      </Button>
    );
  }
}

export class Buttons extends React.Component {
  render() {
    const { props } = this;
    const { state } = this;
    return (
      <View style={styles.view}>
        <View style={styles.button}>
          <Text style={styles.text}>
            {'Primary Button - Transaction succeeded'}
          </Text>
          <PrimaryButtonSuccess />
        </View>
        <View style={styles.button}>
          <Text style={styles.text}>
            {'Primary Button - Transaction failed'}
          </Text>
          <PrimaryButtonFailure />
        </View>
        <View style={styles.button}>
          <Text style={styles.text}>
            {'Secondary Button - Transaction succeeded'}
          </Text>
          <SecondaryButtonSuccess />
        </View>
        <View style={styles.button}>
          <Text style={styles.text}>
            {'Secondary Button - Transaction failed'}
          </Text>
          <SecondaryButtonFailure />
        </View>
        <View style={styles.button}>
          <Text style={styles.text}>{'Button Regions'}</Text>
          <SecondaryButtonAll />
        </View>
      </View>
    );
  }
}

const styles = {
  view: {
    padding: 15
  },
  text: {
    fontSize: 14,
    marginBottom: 10,
    color: '#fff'
  },
  button: {
    marginBottom: 30
  }
};

export default Buttons;
