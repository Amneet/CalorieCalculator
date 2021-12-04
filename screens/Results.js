//@author - Amneet Singh

import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ActivityIndicator, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import Data from './data/sampleFood'


class AddManually extends React.Component {


    constructor() {
        super();
        this.state = {
            number: 0,
            animating: true
        }
    }

    componentDidMount() {
        const randomNumber = Math.floor(Math.random() * 10);
        this.setState({number: randomNumber})
        setTimeout(function() {
            this.setState({animating: false})
        }.bind(this), 1500)
    }


    static navigationOptions = ({ navigation }) => {
        return {
            loggedin: navigation.route.params.loggedin,
        };
    };

    render() {
        const animating = this.state.animating
        return (
            <ImageBackground source={require('../assets/frame.jpg')} style={styles.imgBg}>
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
                    {/* <ImageBackground source={require('../assets/frame.jpg')} style={styles.imgBg}> */}
                        <View style={styles.container}>
                            <TouchableOpacity style={styles.backButton} onPress={() => (this.props.route.params.loggedin ? this.props.navigation.navigate('Home') : this.props.navigation.navigate('Login') )}>
                                <Icon name="arrow-back" raised reverse />
                            </TouchableOpacity>
                            <View style={styles.border}>
                                <View>
                                    <Text style={styles.heading}>Nutrition Facts </Text>
                                    <Text style={styles.italics}>(Per 100g) </Text>
                                    <Text style={styles.bottomBorder}></Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.caloriesHeading}>Amount </Text>
                                    <Text style={styles.amountHeading}>% Value </Text>
                                </View>
                                <View>
                                    <View style={styles.row}>
                                        <Text style={styles.item}>Calories </Text>
                                        <Text style={styles.itemRight}>{Data[this.state.number].Calories} </Text>
                                    </View>
                                    <Text style={styles.bottomBorderThin}></Text>
                                    <View style={styles.row}>
                                        <Text style={styles.item}>Fat </Text>
                                        <Text style={styles.itemRight}>{Data[this.state.number].Fat} </Text>
                                    </View>
                                    <Text style={styles.bottomBorderThin}></Text>
                                    <View style={styles.row}>
                                        <Text style={styles.item}>Cholesterol </Text>
                                        <Text style={styles.itemRight}>{Data[this.state.number].Cholesterol} </Text>
                                    </View>
                                    <Text style={styles.bottomBorderThin}></Text>
                                    <View style={styles.row}>
                                        <Text style={styles.item}>Sodium </Text>
                                        <Text style={styles.itemRight}>{Data[this.state.number].Sodium} </Text>
                                    </View>
                                    <Text style={styles.bottomBorderThin}></Text>
                                    <View style={styles.row}>
                                        <Text style={styles.item}>Carbohydrates </Text>
                                        <Text style={styles.itemRight}>{Data[this.state.number].Carbohydrates} </Text>
                                    </View>
                                    <Text style={styles.bottomBorderThin}></Text>
                                    <View style={styles.row}>
                                        <Text style={styles.item}>Protein </Text>
                                        <Text style={styles.itemRight}>{Data[this.state.number].Protein} </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    {/* </ImageBackground> */}
                </View>
                }
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
    bottomBorder: {
        borderBottomWidth: 5,
        marginBottom: 20
    },
    bottomBorderThin: {
        borderTopWidth: 1,
        marginBottom: -15
    },
    row: {
        flexDirection: 'row',
        margin: 10
    },  
    backButton: {
        marginTop: 50,
        marginLeft: 10,
    },
    border: {
        borderWidth: 1,
        padding: 20,
        margin: 20,
        backgroundColor: 'rgba(255,255,255,0.7)',
        borderRadius: 7,
        marginTop: '25%',
        alignSelf: 'center'
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
    item: {
        fontSize: 15,
        width: '50%',
        fontWeight: 'bold'
    },
    itemRight: {
        fontSize: 15,
        marginLeft: '20%'
    },
    italics: {
        fontStyle: 'italic'
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    caloriesHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        width: 100
    },
    amountHeading: {
        fontSize: 20,
        marginLeft: '25%',
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    preLoaderOn: {
        position: 'absolute',
        zIndex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255,255,255,.55)',
    }
});

export default AddManually;