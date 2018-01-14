import React, { Component } from 'react';
import { FlatList, TouchableHighlight } from 'react-native';
import {getServerData} from '../services/requests'

import {parseString} from 'react-native-xml2js'

import Item from '../components/item'
import { parseOnionData } from '../utils/parsers';

export default class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    componentDidMount() {
        var self = this;
        getServerData().then(function(data) {
            self.setState({data: parseOnionData(data)});
        }).catch(function(e) { console.log(e)});
    }

    render() {
        return (
            <FlatList
                data={this.state.data}
                renderItem={({ item }) => (
                    <Item title={item.title} id={item.key}></Item>
                )}
                keyExtractor={(item, key) => key}
            />
        );
    }
}