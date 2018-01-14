import React, { Component } from 'react';
import {Text, View, TouchableHighlight, Image, Linking } from 'react-native';

export default class Item extends Component {
    _onPressButton (item) {
        this.props.onItemClick(item);
    }

    render() {
        return (
            <TouchableHighlight onPress={() => this._onPressButton(this.props.info)} underlayColor="white">
                <View flexDirection='row' style={{flex: 1}}>
                    <Image style={{width: 50, height: 50}} source={{uri: this.props.info.image}}/>
                    <Text style={{width: "100%"}}>{this.props.info.title}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}