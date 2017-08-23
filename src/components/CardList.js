import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Card from '../components/Card.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/actions';
const CardList = (props) => {
    if(props.state.Cards.Cards.length==0 && props.state.Cards.Points>0){
   props.actions.loadCards();
    }
    function handleClick(index, selCard) {
        console.log(props)
        props.actions.cardClicked(index)
        
        if (props.state.Cards.shownCards > 1) {
            if (props.state.Cards.currentCard.id === selCard.id) {
                setTimeout(function(){
                    props.actions.cardMatched(selCard.id)
                },0)
                
            } else {
                setTimeout(function(){
                   props.actions.cardUnMatched();  
               },0)
               
            }
        }
    }
    return (
        <View style={styles.cardGrid}>
            {props.state.Cards.Cards.map((card, index) =>
                <TouchableOpacity onPress={() => handleClick(index, card)} style={styles.cardTouch}>
                    <Card {...card} />
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        flex: 1,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: 'green',
        alignContent:'space-between'
    },
    cardTouch: {
        flexShrink: 1,
        marginRight: 10,
        marginBottom: 20
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardList);