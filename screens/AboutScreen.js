import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Platform,
} from 'react-native';

import { NavigationBar } from '@exponent/ex-navigation';

export default class AboutScreen extends Component {
  static route = {
    navigationBar: {
      title: 'About'
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.subNavigationBarTitle, {color: 'black'}]}>
          About
        </Text>
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