//@author - Amneet Singh

import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';

class AddManually extends React.Component {

    constructor() {
        super();
        this.state = {
            animating: false,
            cameraVisible: false
        }
    }

    async handleClick() {
        this.setState({ cameraVisible: true })
    }

    render() {
        const animating = this.state.animating
        return (
            animating === true ?
                <View style={styles.container}>
                    <ActivityIndicator
                        animating={animating}
                        color='white'
                        size="large"
                        style={styles.preLoaderOn} />
                </View>
                :
                <View style={styles.container}>
                    <ImageBackground source={require('../assets/homeBg2.jpg')} style={styles.imgBg}>
                        <View style={styles.container}>
                            <View style={styles.logOut}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('Login')}
                                >
                                    <Icon name="power-settings-new" color="white" />
                                </TouchableOpacity>
                            </View>
                            <Image style={styles.logoImg} source={require('../assets/icon1.png')} />
                            <Text style={styles.loginHeading}>Food Calories Calculator</Text>
                            <TouchableOpacity style={styles.updateAllButton} onPress={() => this.handleClick()}>
                                <Text style={styles.updateAllButtonText}>Scan Food Item</Text>
                            </TouchableOpacity>
                            {
                                this.state.cameraVisible
                                    ?
                                    this.props.navigation.navigate('Camera')
                                    // <Cameraa />
                                    :
                                    null
                            }
                            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Manually')}>
                                <Text style={styles.buttonText}>Add Manually</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('History')}>
                                <Text style={styles.buttonText}>View History</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logOut: {
        position: 'absolute',
        top: 45,
        right: 25,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 20,
        padding: 2,
        backgroundColor: 'rgba(255,255,255,0.4)'
    },
    imgBg: {
        width: '100%',
        height: '100%'
    },
    button: {
        borderWidth: 0,
        borderRadius: 10,
        marginBottom: 25,
        borderColor: '#f0f0f0',
        backgroundColor: '#f0f0f0',
        padding: 10,
        width: 150,
    },
    updateAllButton: {
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 50,
        borderColor: '#fff',
        backgroundColor: 'rgba(255, 165, 0, 0.9)',
        padding: 10,
        width: 200,
    },
    buttonText: {
        fontSize: 15,
        textAlign: 'center',
    },
    updateAllButtonText: {
        fontSize: 17,
        textAlign: 'center',
        color: '#fff'
    },
    loginHeading: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        marginBottom: 45,
        fontFamily: 'serif',
        textAlign: 'center',
        padding: 10,
        marginTop: 50,
        backgroundColor: 'rgba(255,255,255,0.8)',
        width: '90%',
        textAlign: 'center',
        padding: 10,
        borderRadius: 10,
        borderColor: '#fff'
    },
    logoImg: {
        width: 130,
        height: 130
    },
    preLoaderOn: {
        position: 'absolute',
        zIndex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,.55)',
    }
});

export default AddManually;