import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

export default class HomeScreen extends Component {
  static route = {
    navigationBar: {
      title: 'Home'
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
});