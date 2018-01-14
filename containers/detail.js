import React, { Component } from 'react';
import { ScrollView, Text, Button, Linking, Image } from 'react-native';

export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {item: this.props.navigation.state.params.item};
        this.openInBrowser = this.openInBrowser.bind(this);
    }

    openInBrowser() {
        Linking.canOpenURL(this.state.item.link).then(supported => {
            if (supported)
                Linking.openURL(this.state.item.link);
            else
                console.log("I wasn't able to open this url: " + this.state.item.link);
        });
    }
    
    render() {
        return (
            <ScrollView>
                <Image style={{width: "100%", height: "50%"}} resizeMode="cover" source={{uri: this.state.item.image}}/>
                <Text style={{padding: 10, fontSize: 16, fontWeight: "bold"}}>{this.state.item.title}</Text>
                <Text style={{marginTop: 5, textAlign: "justify", padding: 10, color: "#333"}}>{this.state.item.description}</Text>
                <Button
                    onPress={this.openInBrowser}
                    title="Open in browser"
                    color="#333"
                    accessibilityLabel="Open this article in your browser."/>
            </ScrollView>
        );
    }
}