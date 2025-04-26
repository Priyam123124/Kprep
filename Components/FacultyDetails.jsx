import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient'

const { width, height } = Dimensions.get('window')
const isTallDevice = width >= 800

const FacultyDetails = () => {
return (
    <View>
        <Text style={{fontFamily: 'Poppins-Regular', fontSize: isTallDevice?40:22, fontWeight: '800', margin: 20}}>FACULTY DETAILS</Text>
        <TouchableOpacity style={{marginLeft: 20, borderWidth: 1, borderStyle: 'solid', borderColor: 'black', width: isTallDevice?'20%':'25%', borderRadius: 50, height: isTallDevice?40:27}}>
            <Text style={{marginLeft: '10%', fontSize: isTallDevice?25:15, marginTop: '3%'}}>Subject</Text>
        </TouchableOpacity>
        <View style={{width: '100%'}}>
        <ScrollView contentContainerStyle={{flexWrap: 'wrap', flexDirection: 'row'}}>
            {Array.from({length: 10}).map((_, index) => (
                <TouchableOpacity key={index} style={styles.profContainer}>
                    <LinearGradient colors={['#F4FFF1', '#BFE3AC']} key={index} style={{width: '100%', height: '100%',borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
                <View style={styles.profileicon}>
                    <Icon name="user" size={isTallDevice?150:50} color="black"/>
                </View>
                <Text style={styles.font}>123@gmail.com</Text>
                <Text style={styles.font}>Professor Name</Text>
            </LinearGradient>
                </TouchableOpacity>
            ))}
        </ScrollView>
        </View>
        
    </View>
)
}

export default FacultyDetails

const styles = StyleSheet.create({
    profContainer: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        width: isTallDevice?350:140,
        height: isTallDevice?380:170,
        margin: 20,
        borderRadius: 10
    },
    profileicon: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black', 
        width: isTallDevice?200:80,
        height: isTallDevice?200:80,
        borderRadius: 1000,
        alignItems: 'center',
        justifyContent: "center"
    },
    font: {
        fontFamily: 'Poppins-Bold',
        fontSize: isTallDevice?30:15
    }
})