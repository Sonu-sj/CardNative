//get data from Source
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import CardList from '../components/CardList.js';
import ScoreCard from '../components/ScoreCard.js';
import Timer from '../components/Timer.js';
import {connect,Provider} from 'react-redux';
import {bindActionCreators} from 'redux';
import configureStore from '../store/configureStore';
// import {Provider} from 'react-redux';

export default class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.store = configureStore();
        this.state = {
            Cards: [{},{},{},{}],
            Level:1
        }
    }
    render() {
        return (
            <Provider store={this.store}>
            <View style={styles.GameArea}>
                <CardList Cards={this.state.Cards} />
            </View>
            </Provider>
        );
    }

}

const styles = StyleSheet.create({
    GameArea: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
