import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Item extends Component {
    render() {
        return (
            <View flexDirection='row'>
                <Text>{this.props.title}</Text>
                <Text>{this.props.title}</Text>
                <Text>{this.props.title}</Text>
            </View>
        );
    }
}