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

export default class WebApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const WEBWIEW_NAME = 'webView';
    const {url} = this.props;

    return (
      <View>
        <WebView
          ref={WEBWIEW_NAME}
          source={{uri: url}}
        />
      </View>
    );
  }
}

// WebApp.propTypes = {
//   url: React.PropTypes.string.isRequired()
// };

