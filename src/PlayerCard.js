import React, { Component } from 'react';
import { AppRegistry, View, Image, Text,TouchableOpacity } from 'react-native';
const PlayerCard = ({ name, picture, HighlightIndex, index, setHighLighted }) => {
    var linkStyle = {};
    if (HighlightIndex >= 0 && HighlightIndex === index) {
        linkStyle = { backgroundColor: 'red' };
    }
    var callsetHighLighted = (index) => {
        setHighLighted(index);
    }
    console.log(picture);
    return (<TouchableOpacity onPress={() => { callsetHighLighted(index) }} style={linkStyle}>
         <Image
          style={{width: 150, height: 150}}
          source={{uri: picture.medium}}
        />
    </TouchableOpacity>
    )

}
export default PlayerCard;
