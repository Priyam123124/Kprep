import { StyleSheet, Text, TouchableOpacity, View,Dimensions } from 'react-native'
import React,{useContext} from 'react'
import { globalStyles } from './global_styles'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { StackActions } from '@react-navigation/native'
import themeContext from '../context/themeContext'

    const {width, height} = Dimensions.get('window')
    const isTallDevice = width >=800 

const NotesSelection = () => {
    const context = useContext(themeContext)
    const { dark } = context
    const navigation = useNavigation()
    const redirect = () => {
        navigation.dispatch(
            StackActions.push('Resources')
        )
    }
    return (
        <>
        <View style={{ alignItems: 'center', height: '100%', backgroundColor: dark?'white':'#333333' }}>
                <Text style={[{ width: 'auto', fontSize: isTallDevice?40:25, color: dark?globalStyles.textcolor.color: '#84CFFF', fontWeight: 'bold', marginTop: 50 }]}>Choose Your Notes</Text>
                <TouchableOpacity onPress={redirect} style={styles.container}>
                    <LinearGradient
                        colors={dark?["#9DC17B", "#587C4D"]:["#5F727F", "#8DB4CE"]}
                        start={{ x: 0.7, y: 0.3 }} // Approximate 128.79deg
                        end={{ x: 0.3, y: 0.9 }}
                        style={{ width: '100%', height: '100%', alignItems: 'flex-end', flexDirection: 'row-reverse', borderRadius: 5 }}
                    >

                        <Text style={{color: 'white', fontSize: isTallDevice?30:20, margin: 20}}>Star Notes</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity onPress={redirect} style={styles.container}>
                    <LinearGradient
                        colors={dark?["#9DC17B", "#587C4D"]:["#5F727F", "#8DB4CE"]}
                        start={{ x: 0.7, y: 0.3 }} // Approximate 128.79deg
                        end={{ x: 0.3, y: 0.9 }}
                        style={{ width: '100%', height: '100%', alignItems: 'flex-end', flexDirection: 'row-reverse', borderRadius: 5 }}
                    >

                        <Text style={{color: 'white', fontSize: isTallDevice?30:20, margin: 20}}>Regular Notes</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default NotesSelection

const styles = StyleSheet.create({
    container: {
        width: "80%",
        height: "35%",
        marginTop: 25,
        borderRadius: 5
    }
})