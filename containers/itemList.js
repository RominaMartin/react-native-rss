import React, { Component } from 'react';
import { FlatList, TouchableHighlight } from 'react-native';
import {getServerData} from '../services/requests'

import Item from '../components/item'
import { parseOnionData } from '../utils/parsers';

export default class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [], refreshing: false};
        this.onRefresh = this.onRefresh.bind(this);
    }

    componentDidMount() {
        var self = this;
        getServerData().then(function(data) {
            self.setState({...self.state, data: parseOnionData(data)});
        }).catch(function(e) { console.log(e)});
    }

    onRefresh() {
        let self = this;
        self.setState({...this.state, refreshing: true});
        getServerData().then(function(data) {
            self.setState({...self.state, data: parseOnionData(data), refreshing: false});
        }).catch(function(e) { console.log(e)});
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <FlatList
                data={this.state.data}
                renderItem={({ item }) => (
                    <Item info={item} onItemClick={() => navigate('Details', {item: item})}></Item>
                )}
                keyExtractor={(item, key) => key}
                onRefresh={this.onRefresh}
                refreshing={this.state.refreshing}
                width="100%"
            />
        );
    }
}