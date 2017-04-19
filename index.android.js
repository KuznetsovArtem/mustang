import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import App from './app/App'

export default class mustang extends Component {
  render() {
    return (
      <App/>
    );
  }
}

AppRegistry.registerComponent('mustang', () => mustang);
