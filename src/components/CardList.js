import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Card from '../components/Card.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/actions';
const CardList = (props) => {
    function handleClick(index, selCard) {
        props.actions.cardClicked(index)
        console.log(props)
        if (props.state.Cards.shownCards > 1) {
            if (props.state.Cards.currentCard.id === selCard.id) {
                props.actions.cardMatched(selCard.id)
            } else {
                console.log('unmatched');
                props.actions.cardUnMatched();
            }
        }
    }
    return (
        <View style={styles.cardGrid}>
            {props.state.Cards.Cards.map((card, index) =>
                <TouchableOpacity onPress={() => handleClick(index, card)} style={styles.cardTouch}>
                    <Card style={styles.cardTouch} {...card} />
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
        borderColor: 'green'
    },
    cardTouch: {
        flexGrow: 1,
        flexShrink: 1,
        marginRight: 100,
        marginBottom: 20
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardList);