import React, { Component } from 'react';
import { FlatList, TouchableHighlight } from 'react-native';
import {getServerData} from '../services/requests'

import Item from '../components/item'

export default class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [{key: "A"}, {key: "B"}] };
    }

    componentDidMount() {
        getServerData().then(function(data) {
            console.log(data);
        });
    }

    render() {
        return (
            <FlatList
                data={this.state.data}
                renderItem={({ item }) => (
                    <Item title={item.key} id={1}></Item>
                )}
            />
        );
    }
}