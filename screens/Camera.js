import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { Icon } from 'react-native-elements';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasPermission: null,
            type: Camera.Constants.Type.back,
            loggedin: ''
        }
    }

    static navigationOptions = ({ navigation }) => {
        return {
            loggedin: navigation.route.params.loggedin,
        };
    };
    
    componentDidMount() {
        // const { loggedin } = this.props.navigation.route.params.loggedin;
        // this.setState({loggedin})
        async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            this.setState({hasPermission: status === 'granted'});
        }

        if (this.state.hasPermission === null) {
            return <View />;
        }
        if (this.state.hasPermission === false) {
            return <Text>No access to camera</Text>;
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <Camera style={styles.camera} type={this.state.type} >
                    <TouchableOpacity style={styles.backButton} onPress={() => (this.props.route.params.loggedin ? this.props.navigation.navigate('Home') : this.props.navigation.navigate('Login') )}>
                        <Icon name="arrow-back" size={20} raised />
                    </TouchableOpacity>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.flipButton}
                            onPress={() => {
                                this.setState(
                                this.state.type === Camera.Constants.Type.back
                                    ? {type: Camera.Constants.Type.front}
                                    : {type: Camera.Constants.Type.back}
                                );
                            }}>
                            <Icon name="refresh" color="#fff" size={20} reverse reverseColor="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.clickButton} onPress={() => this.props.navigation.navigate('Results', {loggedin: this.props.route.params.loggedin})} >
                            <Icon name="camera" color="#fff" size={35} reverse reverseColor="black" />
                        </TouchableOpacity>
                    </View>
                </Camera>
            </View>
        )
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  backButton: {
      marginTop: 30,
      marginLeft: 10
  },
  flipButton: {
      marginTop: '175%',
  },
  clickButton: {
      marginTop: '170%',
      marginLeft: '20%'
  }
});

export default App;