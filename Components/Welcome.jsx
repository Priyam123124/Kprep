import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import React, { useContext } from 'react'
import themeContext from '../context/themeContext'

const Welcome = () => {
  const context = useContext(themeContext)
  const { dark } = context

  const styles = StyleSheet.create({
    info: {
        width:'100%',
        height: '100%',
        marginTop: '20%',
        borderRadius: 60,
    },
    text: {
        fontFamily: 'Poppins-Regular',
        margin: 40,
        fontSize: 30,
        color: dark? 'black': '#032729'       
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.2,
        borderColor: 'black',
        borderStyle: 'solid',
        width: '35%',
        height: 45,
        borderRadius: 50,
        fontFamily: 'Copse-Regular'
    }
})

  return (
    <View style={{justifyContent: 'center', backgroundColor: dark? 'white': 'black', alignItems: 'center', width: '100%', height: '100%'}}>
      <Image style={{width: '60%', height: '20%', marginTop: '150%'}} source={dark?require('./Images/topi.png'):require('./Images/topi-dark.png')} />
      <View>
        <Text style={{fontFamily: 'Poppins-Bold', color: dark?'#7A9670':'#A4D8FA', fontSize: 40, letterSpacing: 2}}>K-PREP</Text>
      </View>
      <LinearGradient
      colors={dark?["#587C4D", "#81A376"]:['#81A4BB', '#81A4BB']}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.info}
    >
      <Text style={styles.text}>Welcome</Text>
      <Text style={[styles.text, {fontFamily: 'calibri-regular', color: dark?'black':'#022684', marginTop: "-5%", fontSize: 22}]}>lorem ipsum dolor sit amet,consectetur adipisicing elit, </Text>

      <View style={{width: '100%', justifyContent: 'center', flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity style={[styles.button, {backgroundColor: 'white'}]}><Text style={{fontFamily: 'Copse-Regular'}}>Sign In</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.button, {marginLeft: 10, backgroundColor: 'black', color: 'white'}]}><Text style={{fontFamily: 'Copse-Regular', color: 'white'}}>Sign Up</Text></TouchableOpacity>
      </View>
    </LinearGradient>
    </View>
  )
}

export default Welcome