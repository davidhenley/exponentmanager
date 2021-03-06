import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { StatusBar } from 'react-native';
import firebase from 'firebase';
import Router from './navigation/Router';

import reducers from './reducers';

import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    StatusBar.setHidden(true);
    const config = {
      apiKey: 'AIzaSyBA1lKlR2DZBnEYv4re8d3L8BF1GwxDzUc',
      authDomain: 'react-native-manager-4633a.firebaseapp.com',
      databaseURL: 'https://react-native-manager-4633a.firebaseio.com',
      storageBucket: 'react-native-manager-4633a.appspot.com',
      messagingSenderId: '945116885188'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
