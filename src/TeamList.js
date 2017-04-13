import React, { Component } from 'react';
import TeamCard from './TeamCard.js';
class TeamList extends Component {
    render() {
        return (
            <div className="teamList">
                {this.props.data.map((player,i) =><TeamCard key={i} {...player} movePlayer={this.props.movePlayer} index={i}/>)
                }
            </div>
        );
    }
}

export default TeamList;
