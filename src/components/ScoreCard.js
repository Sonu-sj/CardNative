import React, { Component } from 'react';
import { AppRegistry, View, Image, Text, TouchableOpacity,StyleSheet} from 'react-native';
import {connect,Provider} from 'react-redux';
const ScoreCard = (props) => {
    return (<View style={styles.ScoreContainer}><Text>ScoreCard {props.state.Cards.Points} Level {props.state.Cards.Level} Cards {props.state.Cards.Cards.length}</Text></View>)
}

const mapStateToProps = (state) => ({
    state: state
});

export default connect(
    mapStateToProps
)(ScoreCard);

const styles = StyleSheet.create({
ScoreContainer:{
    backgroundColor:'white'
}
});