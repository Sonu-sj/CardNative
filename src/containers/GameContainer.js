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

export default class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Cards: [{},{},{},{}]
        }
    }
    render() {
        return (
            <View style={styles.GameArea}>
                <CardList Cards={this.state.Cards} />
            </View>
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
