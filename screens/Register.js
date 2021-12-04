//@author - Amneet Singh

import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ActivityIndicator, ScrollView, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import Data from './data/history.json'
import { Block, Accordion } from 'galio-framework'
class Register extends React.Component {

    constructor() {
        super();
        this.state = {
            animating: true,
            calories: '',
            fat: '',
            cholesterol: '',
            sodium: '',
            carbohydrates: '',
            protein: '',
        }
    }

    componentDidMount() {
        setTimeout(function() {
            this.setState({animating: false})
        }.bind(this), 1500)
    }

    handleReset = () => {       
        this.setState({calories: '', protein: '', cholesterol: '', fat: '', carbohydrates: '', sodium: ''}) 
    }
    
    handleRegister = () => {        
        this.state.calories && this.state.fat && this.state.sodium && this.state.cholesterol && this.state.carbohydrates && this.state.protein 
        ? 
        (alert('Please Check Your Email For The Link.'), this.setState({calories: '', protein: '', cholesterol: '', fat: '', carbohydrates: '', sodium: ''})) 
        : 
        alert('Please Enter All Values')
    }

    render() {
        const animating = this.state.animating
        return (
            <ImageBackground source={require('../assets/homeBg1.jpg')} style={styles.imgBg}>
            {animating === true ?
                <View style={styles.container}>
                    <ActivityIndicator
                        animating={animating}
                        color='gray'
                        size="large"
                        style={styles.preLoaderOn} />
                </View>
                :
                <View style={styles.container}>
                        <View style={styles.container}>
                                <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.navigate('Login')}>
                                    <View style={styles.row}>
                                        <Icon name="arrow-back" raised size={17} />
                                        <Text style={styles.text}>REGISTER</Text>
                                    </View>
                                </TouchableOpacity>
                            <ScrollView>
                                <View style={styles.historyBlock}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="First Name"
                                        placeholderTextColor='black'
                                        onChangeText={(calories) => this.setState({ calories })}
                                        value={this.state.calories}
                                    />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Last Name"
                                        placeholderTextColor='black'
                                        onChangeText={(fat) => this.setState({ fat })}
                                        value={this.state.fat}
                                    />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Email ID"
                                        keyboardType = 'email-address'
                                        placeholderTextColor='black'
                                        onChangeText={(cholesterol) => this.setState({ cholesterol })}
                                        value={this.state.cholesterol}
                                    />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Password"
                                        placeholderTextColor='black'
                                        secureTextEntry={true}
                                        onChangeText={(sodium) => this.setState({ sodium })}
                                        value={this.state.sodium}
                                    />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Re-Enter Password"
                                        secureTextEntry={true}
                                        placeholderTextColor='black'
                                        onChangeText={(carbohydrates) => this.setState({ carbohydrates })}
                                        value={this.state.carbohydrates}
                                    />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Contact Number"
                                        keyboardType = 'number-pad'
                                        placeholderTextColor='black'
                                        maxLength={10}
                                        onChangeText={(protein) => this.setState({ protein })}
                                        value={this.state.protein}
                                    />
                                    <View style={styles.buttonRow}>
                                        <TouchableOpacity onPress={() => this.handleReset()}>
                                            <View style={styles.reset}>
                                                <Text style={{color: '#fff', paddingRight: 20, paddingLeft: 20}}>Reset!</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => this.handleRegister()}>
                                            <View style={styles.nonLogin}>
                                                <Text style={{color: '#fff', paddingRight: 20, paddingLeft: 20}}>Register!</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                </View>}
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imgBg: {
        width: '100%',
        height: '100%'
    },
    accordion: {
        height: '80%',
        width: '80%',
    },
    backButton: {
        marginTop: 50,
        marginLeft: 10,
    },
    input: {
        borderColor: '#ffffff75',
        backgroundColor: '#fff',
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        width: '50%',
        marginBottom: 10,
        marginTop: 5,
        fontSize: 15,
        color: 'black'
    },
    row: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.7)',
    },
    buttonRow: {
        flexDirection: 'row'
    },
    form: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.7)',
        padding: 10,
        borderRadius: 10,
    },
    item: {
        backgroundColor: 'rgba(255,255,255,0.7)',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 25,
        alignSelf: "center",
        marginLeft: '10%'
    },
    historyBlock: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
    },
    preLoaderOn: {
        position: 'absolute',
        zIndex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255,255,255,.55)',
    },
    nonLogin: {
        margin: 10,
        padding: 10,
        backgroundColor: 'green',
        borderRadius: 7,
        borderColor: '#fff',
        borderWidth: 1
    },
    reset: {
        margin: 10,
        padding: 10,
        backgroundColor: 'red',
        borderRadius: 7,
        borderColor: '#fff',
        borderWidth: 1
    }
});

export default Register;