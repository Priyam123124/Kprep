import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useContext } from 'react'
import themeContext from '../context/themeContext'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'

    const {width, height} = Dimensions.get('window')
    const isTallDevice = width >=800 

const Profile = () => {
  const context = useContext(themeContext)
  const { dark } = context
  const gradientColor = dark
    ? ['#75A665', '#9DC17B', '#CAE5B0', '#9DC17B', '#75A665']
    : ['#333333', '#5F727F', '#8DB4CE']  // Fixed missing `#` in last color    

    const styles = StyleSheet.create({
      container: {
        alignItems: 'center',
        backgroundColor: !dark ? '#333333' : 'white'
      },
      internalcontainer: {
        width: "93%",
        height: '95.5%',
        borderRadius: 10,
        borderWidth: 0.2,
        borderStyle: 'solid',
        borderColor: dark? 'black' : 'white',
        margin: 15,
        borderRadius: 10,
        alignItems: 'center'
      },
      linear: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: '20%',
        width: '100%'
      },
      profile_icon: {
        backgroundColor: dark? '#75A665':'#5F727F',
        width: isTallDevice?290:150,
        height: isTallDevice?290:150,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'white',
        marginTop: -50,
        borderRadius: 5000
      },
      info: {
        backgroundColor: dark?'#d9d7d7':'black',
        width: '90%',
        height: '42%',
        borderRadius: 10,
        marginTop: 25
      },
      upperText: {
        fontSize: isTallDevice?25:13,
        fontFamily: 'ComicNeue-Regular',
        color: dark?'black':'white'
      },
      lowerText: {
        fontSize: isTallDevice?25:13,
        fontFamily: 'ComicNeue-Bold',
        color: dark?'black':'white'
      }
    })
  return (
    <>
      <View style={styles.container}>
        <View style={styles.internalcontainer}>
          <LinearGradient
            colors={gradientColor}  // Corrected: Using dynamic colors
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            locations={[0, 0.2517, 0.55, 0.7417, 1]}
            style={styles.linear}>
          </LinearGradient>
          <View style={styles.profile_icon}></View>
          <Text style={{fontFamily: 'ComicNeue-Bold', color: dark?'black':'white', fontSize: isTallDevice?40:25, marginTop: 20, letterSpacing: 1}}>Priyam Kumar</Text>
          <View style={{borderRadius: 2, borderWidth: 0.5, marginTop: 15, width: "17%", height: "4%", justifyContent: 'center', alignItems: 'center', borderStyle: 'solid', borderBlockColor: dark?'black':'white'}}>
          <Text style={{color: dark?'black': 'white', fontSize: isTallDevice?22:13}}>Free</Text>
          </View>
          <View style={styles.info}>
            <View style={{flexDirection: 'row', marginTop: 10, borderBottomColor: dark?'black':'white', borderBottomWidth: 0.2, borderBottomStyle: 'solid'}}>
              <Icon style={{margin: isTallDevice?15:10}} name="cog" size={isTallDevice?40:20} color={dark?"black":"white"} />
              <View>
                <Text style={styles.upperText}>Roll Number</Text>
                <Text style={styles.lowerText}>23051690</Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', marginTop: 10, borderBottomColor: dark?'black':'white', borderBottomWidth: 0.2, borderBottomStyle: 'solid'}}>
              <Icon style={{margin: isTallDevice?17:10}} name="envelope" size={isTallDevice?40:20} color={dark?"black":"white"} />
              <View>
                <Text style={styles.upperText}>Email Address</Text>
                <Text style={styles.lowerText}>23051690@kiit.ac.in</Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', marginTop: 10, borderBottomColor: dark?'black':'white', borderBottomWidth: 0.2, borderBottomStyle: 'solid'}}>
              <Icon style={{margin: isTallDevice?17:10}} name="book" size={isTallDevice?40:20} color={dark?"black":"white"} />
              <View>
                <Text style={styles.upperText}>Branch</Text>
                <Text style={styles.lowerText}>Computer Science</Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', marginTop: 10, borderBottomColor: dark?'black':'white', borderBottomWidth: 0.2, borderBottomStyle: 'solid'}}>
              <Icon style={{margin: isTallDevice?17:10}} name="graduation-cap" size={isTallDevice?40:20} color={dark?"black":"white"} />
              <View>
                <Text style={styles.upperText}>Year & Semester</Text>
                <Text style={styles.lowerText}>Year 2, Semester 2</Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', marginTop: 10, borderBottomColor: dark?'black':'white', borderBottomWidth: 0.2, borderBottomStyle: 'solid'}}>
              <Icon style={{margin: isTallDevice?17:10}} name="calendar" size={isTallDevice?40:20} color={dark?"black":"white"} />
              <View>
                <Text style={styles.upperText}>Joined</Text>
                <Text style={styles.lowerText}>29 days ago</Text>
              </View>
            </View>
            
          </View>
        </View>
      </View>
    </>
  )
}

export default Profile