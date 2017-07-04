import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity,StyleSheet} from 'react-native';
const Card = (props) => {
    var placeholderUrl = 'http://lorempixel.com/400/200/abstract/';
    return (<Image style={styles.card} source={{ uri: props.shown?props.src:placeholderUrl }}></Image>)
}
export default Card;
const styles = StyleSheet.create({
    card: {
        width: 100, 
        height: 200
    }
});