import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity,StyleSheet} from 'react-native';
const Card = (props) => {
    var placeholderUrl = 'http://lorempixel.com/400/200/sports/1/';
    if(props.active){
        return (<Image style={styles.card} source={{ uri: props.shown?props.src:placeholderUrl }}></Image>)
    }
    return (<View style={styles.card}></View>)

}
export default Card;
const styles = StyleSheet.create({
    card: {
        width: 200, 
        height: 100
    }
});