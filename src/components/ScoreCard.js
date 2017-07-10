import React, { Component } from 'react';
import { AppRegistry, View, Image, Text, TouchableOpacity } from 'react-native';
import {connect,Provider} from 'react-redux';
const ScoreCard = (props) => {
    console.log(props);
    return (<Text>ScoreCard {props.state.Cards.Points}</Text>)
}

const mapStateToProps = (state) => ({
    state: state
});

export default connect(
    mapStateToProps
)(ScoreCard);