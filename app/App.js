/**
 * Created by artem on 4/19/17.
 */
import React from 'react';
import {
  StackNavigator,
} from 'react-navigation';

import Home from './Pages/Home';
import Browser from './Pages/Browser'

const App = StackNavigator({
  Main: {screen: Home},
  Browser: {screen: Browser},
});

export default App;