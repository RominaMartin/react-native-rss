import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import ItemList from './containers/itemList'
import Detail from './containers/detail'

const RootNavigator = StackNavigator({
  ItemList: {
    screen: ItemList,
    navigationOptions: {
        headerTitle: 'Home',
    }
  },
  Details: {
    screen: Detail,
    navigationOptions: {
        headerTitle: 'Detail',
    }
  }
});

export default RootNavigator;
