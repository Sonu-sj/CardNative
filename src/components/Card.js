import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity,StyleSheet} from 'react-native';
const Card = () => {
    return (<Image style={styles.card} source={{ uri: "https://randomuser.me/api/portraits/med/women/21.jpg" }}></Image>)
}
export default Card;
const styles = StyleSheet.create({
    card: {
        width: 200, 
        height: 200
    }
});