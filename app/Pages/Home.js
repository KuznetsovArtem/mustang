/**
 * Created by artem on 4/20/17.
 */
import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native';
import conf from '../config';
import styles from '../styles';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Welcome page',
  };

  navigateToBrowserPage(url) {
    const { navigate } = this.props.navigation;
    navigate('Browser', { url: url })
  };
  
  render() {
    return (

    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to App!
      </Text>

      <Button
        title="Open webApp"
        onPress={this.navigateToBrowserPage.bind(this, conf.WEBAPP_URL)}
      />

      <Button
        title="Open webApp2"
        onPress={this.navigateToBrowserPage.bind(this, conf.WEBAPP_URL2)}
      />
    </View>
    );
  }
} 