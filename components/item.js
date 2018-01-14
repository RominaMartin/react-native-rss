import React, { Component } from 'react';
import {Text, View, TouchableHighlight, Image, Linking } from 'react-native';

export default class Item extends Component {
    _onPressButton (item) {
        this.props.onItemClick(item);
    }

    render() {
        return (
            <TouchableHighlight onPress={() => this._onPressButton(this.props.info)} underlayColor="white">
                <View flexDirection='row' style={{flex: 1, minHeight: 75, backgroundColor: "#fff", padding: 5, borderBottomColor: "#ccc", borderBottomWidth: 1, justifyContent: "center", alignItems: "center"}}>
                    <Image style={{width: 50, height: 50}} source={{uri: this.props.info.image}}/>
                    <Text style={{width: "80%", marginLeft: 5}}>{this.props.info.title}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}