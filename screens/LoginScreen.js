//@author - Aparna Sharma

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Alert, ActivityIndicator } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';

class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      userId: '',
      password: '',
      showPasswordField: false,
      showUserIdButton: true,
      showLoginButton: false,
      showLoader: false,
      actualUserId: 'Group18',
      actualPassword: 'Group18'
    }
  }

  handleUserId = () => {
    this.state.userId.length > 0 ?
      this.setState({ showPasswordField: true, showUserIdButton: false, showLoginButton: true })
      :
      Alert.alert(
        'Oh No!',
        'Please Enter User ID',
        [
          { text: 'OK' }
        ],
        { cancelable: false }
      )
  }

  handleWithoutLogin = () => {
    this.props.navigation.navigate('Camera', {loggedin: false})
    // Alert.alert(
    //   'Oh No!',
    //   'Feature Coming Soon!',
    //   [
    //     { text: 'OK' }
    //   ],
    //   { cancelable: false }
    // )
  }

  handleLogin = () => {
    this.setState({ showLoader: true });
    !this.state.password ?
      (this.setState({ showLoader: false }),
        Alert.alert(
          'Oh No!',
          'Please Enter Password',
          [
            { text: 'OK' }
          ],
          { cancelable: false }
        ))
      :
      this.state.userId === this.state.actualUserId
        ?
        this.state.password === this.state.actualPassword
          ?
          (this.setState({ showLoader: false }),
            this.props.navigation.navigate('Home'))
          :
          (this.setState({ showLoader: false }),
            Alert.alert(
              'Oh No!',
              'Please Enter Correct Password',
              [
                { text: 'OK' }
              ],
              { cancelable: false }
            ))
        :
        (this.setState({ showLoader: false }),
          Alert.alert(
            'Oh No!',
            'Please Enter Correct User ID',
            [
              { text: 'OK' }
            ],
            { cancelable: false }
          ))
  }


  render() {
    const showLoader = this.state.showLoader
    return (
      showLoader === true ?
        <View style={styles.container}>
          <ActivityIndicator
            animating={showLoader}
            color='white'
            size="large"
            style={styles.preLoaderOn} />
        </View>
        :
        <View style={styles.container}>
          <ImageBackground source={require('../assets/foodBg4.jpg')} style={styles.imgBg}>
            <View style={styles.container}>
              <Text style={styles.heading}>Calorie Counter</Text>
              <Text style={styles.loginHeading}>LOGIN</Text>
              <TextInput
                style={styles.input}
                placeholder="User ID"
                onChangeText={(userId) => this.setState({ userId })}
                value={this.state.userId}
                placeholderTextColor='black'
              >
              </TextInput>
              {
                this.state.showPasswordField ?
                  <TextInput
                    style={styles.input}
                    placeholder="Password"
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                    secureTextEntry={true}
                    placeholderTextColor='black'
                  >
                  </TextInput>
                  :
                  null
              }
              {
                this.state.showUserIdButton ?
                  <TouchableOpacity onPress={() => this.handleUserId()}>
                    <Icon name="arrow-forward" color="black" raised />
                  </TouchableOpacity>
                  :
                  <TouchableOpacity onPress={() => this.handleLogin()}>
                    <Icon name="arrow-forward" color="black" raised />
                  </TouchableOpacity>
              }

              <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                <View style={styles.nonLogin}>
                  <Text>Or Sign-up Instead!</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.handleWithoutLogin()}>
                <View style={styles.nonLogin}>
                  <Text>Scan Without Logging In!</Text>
                </View>
              </TouchableOpacity>
            </View>

          </ImageBackground>
          <StatusBar style="auto" />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerAnimate: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#333",
    justifyContent: 'center',
  },
  imgBg: {
    width: '100%',
    height: '100%'
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
    marginBottom: 100,
    fontFamily: 'serif',
    marginTop: 10,
    backgroundColor: 'rgba(255,255,255,0.7)',
    width: '90%',
    textAlign: 'center',
    padding: 10,
    borderRadius: 10,
    borderColor: '#fff'
  },
  loginHeading: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
    marginBottom: 30,
    fontFamily: 'serif',
    backgroundColor: 'rgba(255,255,255,0.5)',
    width: '40%',
    textAlign: 'center',
    padding: 10,
    borderRadius: 10,
    borderColor: '#fff'
  },
  inputStyle: {
    flexDirection: 'row',
    width: 300,
  },
  input: {
    borderColor: '#ffffff75',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    width: '90%',
    marginBottom: 10,
    marginTop: 5,
    fontSize: 15,
    color: 'black'
  },
  preLoaderOn: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,.55)',
  },
  nonLogin: {
    margin: 10,
    marginTop: 50,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    borderColor: '#fff',
    borderWidth: 1
  }
});

export default Login;