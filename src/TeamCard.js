import React, { Component } from 'react';
const TeamCard = ({name = '', gender, picture={},movePlayer,index}) => {
    return <div onClick = {()=>{movePlayer(index)}} className="teamCard" style={{ "border": "1px solid","margin":"10px",padding:"10px" }}> <img style={{ "display": "block", "margin": "auto" }} src={picture.medium}></img>
    </div >
} 
export default TeamCard;