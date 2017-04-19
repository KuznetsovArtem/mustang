/**
 * Created by artem on 4/19/17.
 */

/**
 * Created by artem on 4/19/17.
 */
import React, { Component } from 'react';
import {
  Text,
  View,
  WebView
} from 'react-native';
import conf from '../config';
import styles from '../styles';

export default class WebApp extends Component {
  render() {
    const WEBWIEW_NAME = 'webView';

    return (
      <View>
        <WebView
          ref={WEBWIEW_NAME}
          source={{uri: conf.WEBAPP_URL}}
        />
      </View>
    );
  }
}

