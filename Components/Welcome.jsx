import { StyleSheet, Text, Image, View, TouchableOpacity, Dimensions, StatusBar } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import React, { useContext } from 'react'
import themeContext from '../context/themeContext'
import { StackActions } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { globalStyles } from './global_styles'

const Welcome = () => {
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
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f3d3'
    },
    logo: {
      width: isTallDevice ? '50%' : '60%',
      height: isTallDevice ? 200 : 150,
      resizeMode: 'contain',
      marginBottom: 20
    },
    title: {
      fontFamily: 'Poppins-Bold',
      color: '#78B961',
      fontSize: isTallDevice ? 60 : 40,
      letterSpacing: 2,
      marginBottom: 40
    },
    cardContainer: {
      width: '90%',
      height: isTallDevice ? 500 : 400,
      borderRadius: 30,
      overflow: 'hidden',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.2,
      shadowRadius: 7,
      elevation: 10
    },
    cardContent: {
      width: '100%',
      height: '100%',
      padding: 25
    },
    welcomeText: {
      fontFamily: 'Poppins-Bold',
      color: '#333',
      fontSize: isTallDevice ? 40 : 28,
      marginBottom: 15,
      fontWeight: 'bold'
    },
    description: {
      fontFamily: 'calibri-regular',
      color: '#555',
      fontSize: isTallDevice ? 22 : 16,
      marginBottom: 40,
      lineHeight: isTallDevice ? 30 : 22
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: isTallDevice ? 40 : 30
    },
    button: {
      width: isTallDevice ? 180 : 130,
      height: isTallDevice ? 60 : 45,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 10,
      flexDirection: 'row',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5
    },
    buttonText: {
      fontFamily: 'Poppins-Bold',
      fontSize: isTallDevice ? 20 : 16,
      marginLeft: 8
    },
    signinButton: {
      backgroundColor: '#f5f3d3',
      borderWidth: 2,
      borderColor: '#78B961'
    },
    signinText: {
      color: '#78B961'
    },
    signupButton: {
      overflow: 'hidden'
    },
    signupText: {
      color: '#333'
    }
  })

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#f5f3d3" barStyle="dark-content" />

      <Image style={styles.logo} source={require('./Images/topi.png')} />

      <Text style={styles.title}>K-PREP</Text>

      <View style={styles.cardContainer}>
        <LinearGradient
          colors={['#FFFDD0', '#78B961']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.cardContent}
        >
          <Text style={styles.welcomeText}>Welcome</Text>

          <Text style={styles.description}>
            Ready to enhance your educational journey? K-PREP offers all the tools and resources you need to excel in your academic pursuits.
          </Text>

          <View style={styles.buttonRow}>
            <TouchableOpacity
              onPress={() => { redirect('basic_info') }}
              style={[styles.button, styles.signinButton]}
            >
              <Icon name="sign-in" size={isTallDevice ? 20 : 16} color="#78B961" />
              <Text style={[styles.buttonText, styles.signinText]}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => { redirect('basic_info') }}
              style={[styles.button, styles.signupButton]}
            >
              <LinearGradient
                colors={['#FFFDD0', '#78B961']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  width: '100%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 25,
                  flexDirection: 'row'
                }}
              >
                <Icon name="user-plus" size={isTallDevice ? 20 : 16} color="#333" />
                <Text style={[styles.buttonText, styles.signupText]}>Sign Up</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    </View>
  )
}

export default Welcome