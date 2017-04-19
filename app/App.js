/**
 * Created by artem on 4/19/17.
 */
import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import styles from './styles';
import WebApp from './Components/WebApp'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to App!
        </Text>
        <View style={styles.container}>
          <WebApp/>
        </View>
      </View>
    );
  }
}

