/**
 * Created by artem on 4/19/17.
 */

import React, { Component } from 'react';
import { Provider, connect } from 'react-redux'
import {Router} from 'react-native-router-flux';
import store from './config/configStore';
import scenes from './routes';

const ConnectedRouter = connect()(Router);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter scenes={scenes}/>
      </Provider>
    );
  }
}