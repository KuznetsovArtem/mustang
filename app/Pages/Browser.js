/**
 * Created by artem on 4/20/17.
 */
import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native';
import styles from '../styles';
import WebApp from '../Components/WebApp'

export default class Browser extends React.Component {
  static navigationOptions = {
    title: 'Browser page',
  };

  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    return (

      <View style={styles.browserPage}>
        <Text>
          Open: {params.url}
        </Text>
        <WebApp url={params.url} />
      </View>
    );
  }
}