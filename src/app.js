import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    // Initialize Firebase
    firebase.initializeApp({
      apiKey: 'AIzaSyBPCpEc-v-mSf_riAUFd79xDzVgXXg7gN0',
      authDomain: 'rainyday-7fa26.firebaseapp.com',
      databaseURL: 'https://rainyday-7fa26.firebaseio.com',
      storageBucket: 'rainyday-7fa26.appspot.com',
      messagingSenderId: '309937705062'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent = () => {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            登出
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Rainyday" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
