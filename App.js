import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ItemList from './containers/itemList'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ItemList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
});
