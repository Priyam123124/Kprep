import { StyleSheet, Text, Image, View, TouchableOpacity, Dimensions } from 'react-native'
import React, { useContext } from 'react'
import themeContext from '../context/themeContext'
import { StackActions } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'

const Start = () => {
  const context = useContext(themeContext)
  const { dark } = context

      const { width, height } = Dimensions.get('window');
      const isTallDevice = width >= 800;

      const navigation = useNavigation()
      const redirect = (name2)=>{
          navigation.dispatch(
              StackActions.push(name2)
          )
      }

  const styles = StyleSheet.create({
    logoContainer: {
        borderWidth: 2,
        borderColor: '#124567',
        borderStyle: 'solid',
        width:'60%',
        height: isTallDevice?470:'30%',
        borderRadius: 2000,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'black',
        borderWidth: 0.2,
        borderStyle: 'solid',
        borderColor: !dark? 'white': '',
        width: '60%',
        height: '10%',
        borderRadius: 20,
        marginTop: 90,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }
})
  return (
    <View style={{justifyContent: 'center', backgroundColor: dark? 'white': 'black', alignItems: 'center', width: '100%', height: '100%'}}>
      <View style={styles.logoContainer}>
        <Image style={{width: '100%', height: '90%', marginLeft: '10%'}} source={dark?require('./Images/k-prep2.png'): require('./Images/Kprep-dark.png')} />
      </View>

      <TouchableOpacity onPress={()=>{redirect('Welcome')}} style={styles.button}>
        <Text style={{color: 'white', fontFamily: 'Poppins-Bold', fontSize: isTallDevice?40:20, letterSpacing: 1}}>Get Started</Text>
        <Text style={{color: 'white', fontWeight: 900, fontSize: isTallDevice?65:40, marginBottom: '9%', letterSpacing: 1}}>→</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Start