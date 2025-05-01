import { StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions } from 'react-native'
import React, { useContext } from 'react'
import themeContext from '../context/themeContext'
import { StackActions } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'
import { globalStyles } from './global_styles'

const BasicInfo = () => {
    const context = useContext(themeContext)
    const { dark } = context

    const { width, height } = Dimensions.get('window');
    const isTallDevice = width >= 800

    const navigation = useNavigation()
    const redirect = (name2) => {
        navigation.dispatch(
            StackActions.push(name2)
        )
    }
    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: '#f5f3d3'
        },
        infoContainer: {
            width: '90%',
            height: isTallDevice ? 700 : 600,
            borderRadius: 20,
            overflow: 'visible',
            position: 'relative'
        },
        gradientBackground: {
            width: '100%',
            height: '100%',
            padding: 10,
        },
        headerText: {
            fontFamily: 'calibri-bold',
            color: '#333',
            fontSize: isTallDevice ? 40 : 22,
            marginTop: 20,
            fontWeight: 'bold',
            textAlign: 'center'
        },
        text: {
            fontFamily: 'ComicNeue-Bold',
            color: '#333',
            marginTop: 20,
            marginLeft: 20,
            fontSize: isTallDevice ? 27 : 18,
            fontWeight: 'bold'
        },
        inputfield: {
            backgroundColor: '#FFFCE4',
            width: '90%',
            borderRadius: 10,
            marginLeft: 15,
            marginTop: 10,
            padding: 10,
            color: 'black',
            borderWidth: 1,
            borderColor: '#78B961',
            fontSize: isTallDevice ? 22 : 16
        },
        container2: {
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
        },
        buttonWrapper: {
            width: '100%',
            alignItems: 'center',
            marginTop: 30,
            position: 'absolute',
            zIndex: 10,
            bottom: -25,
            left: 0,
            right: 0
        },
        buttonContainer: {
            width: isTallDevice ? 200 : 150,
            height: isTallDevice ? 60 : 50,
            borderRadius: 15,
            overflow: 'hidden',
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 5,
            elevation: 8,
            borderWidth: 2,
            borderColor: '#f5f3d3',
        },
        buttonGradient: {
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
        },
        buttonText: {
            fontFamily: 'ComicNeue-Bold',
            color: '#333',
            fontSize: isTallDevice ? 30 : 18,
            fontWeight: 'bold',
            marginLeft: 10
        }
    })
    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <LinearGradient
                    colors={['#FFFDD0', '#78B961']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.gradientBackground}
                >
                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.headerText}>Basic Information</Text>
                    </View>
                    <View style={{ width: '100%', paddingBottom: 50 }}>
                        <Text style={styles.text}>Your Name</Text>
                        <TextInput style={styles.inputfield} placeholder='Your Name' placeholderTextColor="#777" />

                        <Text style={styles.text}>Contact Person Name</Text>
                        <TextInput style={styles.inputfield} placeholder='Contact Person Name' placeholderTextColor="#777" />

                        <View style={styles.container2}>
                            <View style={{ width: '35%' }}>
                                <Text style={styles.text}>Country</Text>
                                <TextInput style={[styles.inputfield, { width: '100%' }]} placeholder='India' placeholderTextColor="#777" />
                            </View>

                            <View style={{ width: '35%' }}>
                                <View style={{ width: '100%', marginLeft: '60%' }}>
                                    <Text style={[styles.text]}>State</Text>
                                </View>
                                <TextInput style={[styles.inputfield, { width: '100%', marginLeft: '70%' }]} placeholder='Select State' placeholderTextColor="#777" />
                            </View>
                        </View>

                        <View style={styles.container2}>
                            <View style={{ width: '35%' }}>
                                <Text style={styles.text}>City</Text>
                                <TextInput style={[styles.inputfield, { width: '100%' }]} placeholder='Select City' placeholderTextColor="#777" />
                            </View>

                            <View style={{ width: '35%' }}>
                                <View style={{ width: '100%', marginLeft: '60%' }}>
                                    <Text style={[styles.text]}>Mobile</Text>
                                </View>
                                <TextInput style={[styles.inputfield, { width: '100%', marginLeft: '70%' }]} placeholder='7895438291' placeholderTextColor="#777" />
                            </View>
                        </View>

                        <Text style={[styles.text, { marginLeft: '15%' }]}>Email</Text>
                        <TextInput style={[styles.inputfield, { width: '80%', marginLeft: '10%' }]} placeholder='example@email.com' placeholderTextColor="#777" />
                    </View>

                    <View style={styles.buttonWrapper}>
                        <TouchableOpacity onPress={() => { redirect('main') }} style={styles.buttonContainer}>
                            <LinearGradient
                                colors={['#3a7bd5', '#446377']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.buttonGradient}
                            >
                                <Icon name="save" size={isTallDevice ? 30 : 20} color="#333" />
                                <Text style={styles.buttonText}>SAVE</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
        </View>
    )
}

export default BasicInfo