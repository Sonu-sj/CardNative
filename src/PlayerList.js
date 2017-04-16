import React, { Component } from 'react';
import PlayerCard from './PlayerCard.js';
import { 
  ListView, 
  StyleSheet, 
  View 
} from 'react-native'; 
class PlayerList extends Component {
    constructor(props) {
        super(props);
        console.log(props.data);
        this.ds = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1.title !== row2.title
        });
        this.state = {
            dataSource: this.ds.cloneWithRows(props.data),
            HighlightIndex: -1
        };
        this.setHighLighted = (index) => {
            console.log('setting highlighed');
            this.setState({
                HighlightIndex: index
            })
            this.props.setSelection(index)
        }
        this.renderRow = this.renderRow.bind(this); 
    }
    
    renderRow(rowData,...rest) {
            const index = parseInt(rest[1], 10);
            return ( <PlayerCard
                index = { index } HighlightIndex = { this.state.HighlightIndex }
                    setHighLighted = { this.setHighLighted } {...rowData } /> 
            );
        }
    render() {
        return ( < ListView dataSource = { this.state.dataSource } renderRow = { this.renderRow }/>
            );
        }
    }

    export default PlayerList;
