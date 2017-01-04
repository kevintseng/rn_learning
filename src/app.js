import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { NavBar, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import Start from './components/Start';

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

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Logout
          </Button>
        );
      case false:
        return (
          <View>
            <Start />
            <LoginForm />
          </View>
        );
      default:
        return (
          <Spinner size="large" />
        );
    }
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <NavBar headerText="Rainyday" />
        <View style={styles.contentStyle}>
          {this.renderContent()}
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  contentStyle: {
    marginBottom: 30,
  }

};

export default App;
