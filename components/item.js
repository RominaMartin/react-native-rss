import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';

export default class Item extends Component {
    constructor(props) {
        super(props);
        // this.selectedItem = this.selectedItem.bind(this);
    }

    _onPressButton (item) {
        console.log(item);
    }

    render() {
        return (
            <TouchableHighlight onPress={() => this._onPressButton(this.props.id)} underlayColor="white">
                <View flexDirection='row'>
                    <Image style={{width: 50, height: 50}} source={{uri: this.props.image}}/>
                    <Text>{this.props.title}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}