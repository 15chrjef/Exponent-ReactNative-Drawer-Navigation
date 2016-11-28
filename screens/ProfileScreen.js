import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

export default class ProfileScreen extends Component {
  static route = {
    navigationBar: {
      title: 'Profile'
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
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