import React, { Component } from 'react';
import {Text, View, TouchableHighlight, Image } from 'react-native';

export default class Item extends Component {
    _onPressButton (url) {
        this.props.onItemClick(url);
    }

    render() {
        return (
            <TouchableHighlight onPress={() => this._onPressButton(this.props.url)} underlayColor="white">
                <View flexDirection='row' style={{flex: 1}}>
                    <Image style={{width: 50, height: 50}} source={{uri: this.props.image}}/>
                    <Text style={{width: "100%"}}>{this.props.title}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}