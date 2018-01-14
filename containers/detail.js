import React, { Component } from 'react';
import { View, Text, Button, Linking, Image } from 'react-native';

export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.openInBrowser = this.openInBrowser.bind(this);
    }

    openInBrowser() {
        Linking.canOpenURL(this.props.item.link).then(supported => {
            if (supported)
                Linking.openURL(this.props.item.link);
            else
                console.log("I wasn't able to open this url: " + this.props.item.link);
        });
    }
    
    render() {
        return (
            <View style={{marginTop: 20}}>
                <Image style={{width: "100%", height: 100}} resizeMode="cover" source={{uri: this.props.item.image}}/>
                <Text>{this.props.item.title}</Text>
                <Text>{this.props.item.description}</Text>
                <Button
                    onPress={this.openInBrowser}
                    title="Open in browser"
                    color="#841584"
                    accessibilityLabel="Open this article in your browser."/>
            </View>
        );
    }
}