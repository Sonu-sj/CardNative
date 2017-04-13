import React, { Component } from 'react';
import { AppRegistry, View, Image } from 'react-native';
const PlayerCard = ({name,picture,HighlightIndex,index,setHighLighted}) => {
    var linkStyle = {backgroundColor: ''};
    if(HighlightIndex>=0 && HighlightIndex ===index){
        linkStyle = {backgroundColor: 'red'};
    }
    var callsetHighLighted =(index)=>{
        setHighLighted(index); 
    }
    
    return <View onClick = {()=>{callsetHighLighted(index)}} style={Object.assign({ "border": "1px solid"},linkStyle)}/>
}
export default PlayerCard;
