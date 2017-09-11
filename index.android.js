/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { UIManager } from 'react-native'
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Provider} from 'react-redux';

import GameContainer from './src/containers/GameContainer';
import configureStore from './store/configureStore';
import * as Actions from './src/actions/actions.js';
export default class CardMatcher extends Component {
    constructor(props) {
      super(props);
      this.store = configureStore();
      this.store.dispatch(Actions.loadCards(0))
  }

  render() {
    return (
    <Provider store={this.store}>
    <GameContainer style={styles.container}/>
    </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  playerList:{
    justifyContent:'flex-start',
    backgroundColor: '#485563',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('CardMatcher', () => CardMatcher);
