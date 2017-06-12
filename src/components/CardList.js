import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity,StyleSheet} from 'react-native';
import Card from '../components/Card.js';
const CardList = (props) => {
    return (
        <View style={styles.cardGrid}>
            {props.Cards.map(() =>
                <Card />)}
        </View>
    )
}
export default CardList;

const styles = StyleSheet.create({
    cardGrid: {
        flex: 1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        flexWrap:'wrap'
    }
});