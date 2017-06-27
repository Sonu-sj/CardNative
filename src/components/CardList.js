import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity,StyleSheet} from 'react-native';
import Card from '../components/Card.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions/actions';
const CardList = (props) => {
    console.log(props);
    return (
        <View style={styles.cardGrid}>
       {props.state.Cards.Cards.map(() =>
             <TouchableOpacity onPress = {props.actions.levelChanged} style={styles.cardTouch}>   
                <Card />
                 </TouchableOpacity>   
                )}
            
        </View>
    )
}

const mapStateToProps = (state) => ({
    state: state
});


/**
 * This function maps actions to props
 * and binds them so they can be called
 * directly.
 *
 * In this case all actions are mapped
 * to the `actions` prop.
 */
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Actions, dispatch)
})


const styles = StyleSheet.create({
    cardGrid: {
        flex: 1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        flexWrap:'wrap'
    },
    cardTouch:{
        height: 200,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginRight:20,
        marginBottom:20
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardList);