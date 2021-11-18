import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { Icon } from 'react-native-elements';

class Cameraa extends React.Component {
    constructor() {
        super()
        this.state = {
            hasPermission: null,
            type: Camera.Constants.Type.back,
            ref: null
        }
    }

    componentDidMount() {
        async () => {
            const { status } = await Camera.requestPermissionsAsync();
            this.setState({ status: 'granted' });
        }

        if (this.state.hasPermission === null) {
            return <View />;
        }
        if (this.state.hasPermission === false) {
            return <Text>No access to camera</Text>;
        }
    }

    async takePicture() {
        if (ref) {
            let photo = await ref.current.takePictureAsync();
            console.log(photo);
        }
        else {
            alert('NOOOOOOo')
        }
        alert('Picture Clicked!')
    };

    onPictureSaved = photo => {
        console.log(photo);
    }

    render() {
        return (
            <View style={styles.container}>
                <Camera style={styles.camera} type={this.state.type} ref={this.state.ref} >
                    <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.navigate('Home')}>
                        <Icon name="arrow-back" size='20' raised />
                    </TouchableOpacity>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.flipButton}
                            onPress={() => {
                                this.state.type === Camera.Constants.Type.back
                                    ? this.setState({type: Camera.Constants.Type.front})
                                    : this.setState({type: Camera.Constants.Type.back})
                            }}>
                            <Icon name="refresh" color="#fff" size='20' reverse reverseColor="#black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.clickButton} onPress={() => alert('Picture Clicked!')} >
                            <Icon name="camera" color="#fff" size='35' reverse reverseColor="#black" />
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
        margin: 25,
        alignItems: 'center'
    },
    flipButton: {
        alignSelf: 'flex-end',
    },
    clickButton: {
        alignSelf: 'flex-end',
        marginLeft: '20%'
    },
    backButton: {
        marginTop: 40,
        marginLeft: 5
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
});

export default Cameraa;
