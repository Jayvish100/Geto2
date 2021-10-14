import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import LoginForm from '../components/LoginForm';
import firebase from 'firebase';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions/AuthActions';
import SplashScreen from 'react-native-splash-screen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class LoginScreen extends Component {
  componentDidMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyBgbfEfHqA_JSHDZn0KRaGkbhOOps4Zjac',

      authDomain: 'geto-3f04a.firebaseapp.com',

      databaseURL:
        'https://geto-3f04a-default-rtdb.asia-southeast1.firebasedatabase.app',

      projectId: 'geto-3f04a',

      storageBucket: 'geto-3f04a.appspot.com',

      messagingSenderId: '141615512273',

      appId: '1:141615512273:web:86c222e47913567f0ee3f0',
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app(); // if already initialized, use that one
    }

    SplashScreen.hide();
  }

  signUp() {
    this.props.navigation.navigate('Signup');
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const {email, password} = this.props;

    this.props.loginUser({email, password});
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <LoginForm
          header="Welcome,"
          subHeader="Sign in to Continue !"
          buttonTitle="CONTINUE"
          onPress={this.onButtonPress.bind(this)}
          onChangeTextEmail={this.onEmailChange.bind(this)}
          onChangeTextPassword={this.onPasswordChange.bind(this)}
          error={this.props.error}
          loading={this.props.loading}
          placeholder1="Email"
          placeholder2="Password"
          linkText="Don't have an Account ? "
          link="Sign Up"
          linkPress={this.signUp.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: windowHeight / 5,
  },
});

windowHeight * 0.2;

const mapStateToProps = ({auth}) => {
  const {email, password, error, loading} = auth;

  return {email, password, error, loading};
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
})(LoginScreen);
// export default LoginScreen;
