import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import React,{useContext} from 'react'
import themeContext from '../context/themeContext'
import { globalStyles } from './global_styles'
import { useNavigation } from '@react-navigation/native'
import { StackActions } from '@react-navigation/native'

const Subject = () => {
    const context = useContext(themeContext)
    const { dark, pyq } = context
    const {width, height} = Dimensions.get('window')
    const isTallDevice = width >=800 

    const navigation = useNavigation()
        const redirect = ()=>{
            if(pyq) {
                navigation.dispatch(
                    StackActions.push('Pyq')
                )
            } else {
                navigation.dispatch(
                    StackActions.push('NotesSelection')
                )
            }
        }
    
        const styles = StyleSheet.create({
            headingtext: {
                fontSize: isTallDevice?50:30,
                fontFamily: 'Poppins-SemiBold',
                margin: 20,
                borderTopLeftRadius: 0
            },
        })
    return (
        <>
            <ScrollView style={[globalStyles.bgGround,{ backgroundColor: !dark ? '#333333' : 'white' }]}>
                <Text style={[styles.headingtext, {color: dark ? 'black' : '#84CFFF'}]}>Subjects</Text>
                
                <View horizontal style={{ flexDirection: 'row', width: '90%', flexWrap: 'wrap', marginLeft: 20 }}>
                        <TouchableOpacity onPress={redirect} style={{width: '47%', marginTop: 20}}>
                            <View style={[globalStyles.content_icon, { borderColor: dark ? '#487639' : '#5D8CAB', width: '100%', height: isTallDevice?250:150 }]}></View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={redirect} style={{width: '47%', marginTop: 20}}>
                            <View style={[globalStyles.content_icon, { borderColor: dark ? '#487639' : '#5D8CAB', width: '100%', height: isTallDevice?250:150, marginLeft: '13%' }]}></View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={redirect} style={{width: '47%', marginTop: 20}}>
                            <View style={[globalStyles.content_icon, { borderColor: dark ? '#487639' : '#5D8CAB', width: '100%', height: isTallDevice?250:150 }]}></View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={redirect} style={{width: '47%', marginTop: 20}}>
                            <View style={[globalStyles.content_icon, { borderColor: dark ? '#487639' : '#5D8CAB', width: '100%', height: isTallDevice?250:150, marginLeft: '13%' }]}></View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={redirect} style={{width: '47%', marginTop: 20}}>
                            <View style={[globalStyles.content_icon, { borderColor: dark ? '#487639' : '#5D8CAB', width: '100%', height: isTallDevice?250:150 }]}></View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={redirect} style={{width: '47%', marginTop: 20}}>
                            <View style={[globalStyles.content_icon, { borderColor: dark ? '#487639' : '#5D8CAB', width: '100%', height: isTallDevice?250:150, marginLeft: '13%' }]}></View>
                        </TouchableOpacity>
                </View>

            </ScrollView>
        </>
    )
}

export default Subject