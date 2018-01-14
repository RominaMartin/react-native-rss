import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ItemList from './containers/itemList'
import Detail from './containers/detail'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {showDetail: false, detailUrl: ""};
    this.showDetail = this.showDetail.bind(this);
  }

  showDetail(url) {
    this.setState({showDetail: true, detailUrl: url});
  }

  render() {
    if(this.state.showDetail) {
      return (
        <Detail url={this.state.detailUrl}/>
      )
    } else {
      return (
        <View style={styles.container}>
          <ItemList onItemClick={this.showDetail}/>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    overflow: "hidden"
  },
});
