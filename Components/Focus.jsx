import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Focus = () => {
        const { width, height } = Dimensions.get('window')
        const isTallDevice = width >= 800
  return (
    <ImageBackground
    source={require('./Images/bg.png')} // or use a URL
      style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}
      resizeMode="cover" // or 'contain', 'stretch', etc.
    >
        <Text style={{fontFamily: 'Comfortaa-Regular', fontSize: isTallDevice?40:17, color: '#6C985F'}}>Daily Motivation | 09 - 03 - 2025</Text>
        <Text style={{fontFamily: 'Comfortaa-Regular', fontSize: isTallDevice?40:17, color: '#215E0E'}}>Your crush likes financially stable</Text>
        <Text style={{fontFamily: 'Comfortaa-Regular', fontSize: isTallDevice?40:17, color: '#215E0E'}}>people. Open that DSA sheet.</Text>
        <View style={{width: "70%", height: isTallDevice?'45%':'35%', borderRadius: 5000, borderWidth: 5, borderStyle: 'solid', borderColor: '#77C3D3', justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
            <Text style={{fontFamily: 'Comfortaa-Bold', fontSize: isTallDevice?50:20, color: 'white'}}>SESSION: 3</Text>
            <Icon style={{marginTop: 40}} name='play' size={isTallDevice?100:50} color={'white'}/>
        </View>

        <View style={{backgroundColor: '#484646', width: '52%', height: 10, flexDirection: 'row', marginTop: 60}}>
            <View style={{height: isTallDevice?40:20, width: '10%', borderRadius: 500, backgroundColor: '#484646', position: 'relative', bottom: isTallDevice?15:6, marginLeft: 10}}></View>
            <View style={{height: isTallDevice?40:20, width: '10%', borderRadius: 500, backgroundColor: '#484646', position: 'relative', bottom: isTallDevice?15:6, marginLeft: isTallDevice?75:30}}></View>
            <View style={{height: isTallDevice?40:20, width: '10%', borderRadius: 500, backgroundColor: '#484646', position: 'relative', bottom: isTallDevice?15:6, marginLeft: isTallDevice?75:30}}></View>
            <View style={{height: isTallDevice?40:20, width: '10%', borderRadius: 500, backgroundColor: '#484646', position: 'relative', bottom: isTallDevice?15:6, marginLeft: isTallDevice?75:30}}></View>
        </View>
        <View style={{width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop: 70}}>
            <View style={{justifyContent:  'center', alignItems: 'center'}}>
                <Icon name="bell" size={isTallDevice?60:25} color="white"/>
                <Text style={{fontFamily: 'Comfortaa-Bold', fontSize: isTallDevice?30:15, color: 'white'}}>snooze</Text>
            </View>

            <View style={{justifyContent:  'center', alignItems: 'center', marginLeft: 25}}>
            <Icon name="undo" size={isTallDevice?60:25} color="white"/>
            <Text style={{fontFamily: 'Comfortaa-Bold', fontSize: isTallDevice?30:15, color: 'white'}}>reset</Text>
            </View>
        </View>
    </ImageBackground>
  )
}

export default Focus

const styles = StyleSheet.create({})