/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import PlayerList from './src/PlayerList.js';
import data from './src/source.js';

export default class CardMatcher extends Component {
    constructor(props) {
    super(props)
    this.state = {
      players: data.results,
      selectedPlayers: Array.from({ length: 10 })
    }
    this.selectedIndex = -1;
  }

  movePlayer = (destIndex) => {
    // this.state.selectedPlayers.shift(this.state.players[sourceIndex]);
    var selectedPlayer = this.state.players[this.selectedIndex];
    this.state.selectedPlayers.splice(destIndex,1,selectedPlayer);
    this.setState({
      selectedPlayers: this.state.selectedPlayers
    })
  }

  setSelection = (index) =>{
    this.selectedIndex = index;
  }
  render() {
    return (
      <View style={styles.container}>
        <PlayerList data={this.state.players}  setSelection = {this.setSelection}/>
      </View>
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
