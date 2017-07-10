//get data from Source
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import CardList from '../components/CardList.js';
import ScoreCard from '../components/ScoreCard.js';
import Timer from '../components/Timer.js';
import {connect,Provider} from 'react-redux';
import {bindActionCreators} from 'redux';
import configureStore from '../store/configureStore';
// import {Provider} from 'react-redux';
var placeholderUrl = 'http://lorempixel.com/400/200/nature/';

export default class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.store = configureStore();
    }
    render() {
        return (
            // <Image source={{uri:placeholderUrl}} style={styles.container}>
            <View style={styles.GameArea}>
            <ScoreCard/>
                <CardList/>              
            </View>
            // </Image>
        );
    }

}

const styles = StyleSheet.create({
    GameArea: {
        flex:1,
        flexWrap:'wrap',
        alignItems:'flex-end'
    },
    container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
