//@author - Amneet Singh

import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';

class AddManually extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                {/* <ImageBackground source={require('../assets/homeBg1.jpg')} style={styles.imgBg}> */}
                <View style={styles.container}>
                    <Text style={styles.text}>ADD MANUALLY PAGE COMING SOON!</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                        <Icon name="arrow-back" raised />
                    </TouchableOpacity>
                </View>
                {/* </ImageBackground> */}
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
    imgBg: {
        width: '100%',
        height: '100%'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        marginBottom: '25%',
        fontFamily: 'serif',
        textAlign: 'center',
        padding: 10,
        marginTop: '25%',
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