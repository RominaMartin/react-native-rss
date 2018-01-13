import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Item from '../components/item'

export default class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [{key: "A"}, {key: "B"}] };
    }
    render() {
        return (
            <FlatList
                data={this.state.data}
                renderItem={({ item }) => <Item title={item.key}></Item>}
            />
        );
    }
}