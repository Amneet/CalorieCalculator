//@author - Amneet Singh

import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import Data from './data/history.json'
import { Block, Accordion } from 'galio-framework'
class ViewHistory extends React.Component {

    constructor() {
        super();
        this.state = {
            animating: true,
        }
    }

    componentDidMount() {
        setTimeout(function() {
            this.setState({animating: false})
        }.bind(this), 1500)
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
                                <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.navigate('Home')}>
                                    <View style={styles.row}>
                                        <Icon name="arrow-back" raised size={17} />
                                        <Text style={styles.text}>HISTORY</Text>
                                    </View>
                                </TouchableOpacity>
                            <View style={styles.historyBlock}>
                                <Block style={styles.accordion} >
                                    <Accordion dataArray={Data} style={styles.item} />
                                </Block>
                            </View>
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
    row: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.7)',
    },
    item: {
        backgroundColor: 'rgba(255,255,255,0.7)',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 25,
        alignSelf: "center",
        marginLeft: '20%'
    },
    historyBlock: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '-10%',
    },
    preLoaderOn: {
        position: 'absolute',
        zIndex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255,255,255,.55)',
    }
});

export default ViewHistory;