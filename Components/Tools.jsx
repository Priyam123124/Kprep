import { StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native'
import React, {useContext} from 'react'
import { globalStyles } from './global_styles'
import { StackActions } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'
import themeContext from '../context/themeContext'

const Tools = () => {
    const context = useContext(themeContext)
    const {width, height} = Dimensions.get('window')
    const isTallDevice = width >=800 
    const { dark } = context
    const navigation = useNavigation()
    const redirect = (name2)=>{
        navigation.dispatch(
            StackActions.push(name2)
        )
    }
    return (
        <>
            <View style={{ justifyContent: 'center', backgroundColor: dark?'white':'#333333', height: "100%", alignItems: 'center' }}>
                <View style={{ width: "80%", justifyContent: 'center', alignItems: 'center', backgroundColor: dark?"#AAD198":"black", marginBottom: 150, borderRadius: 5 }}>
                    <TouchableOpacity onPress={()=>{redirect('Subject')}} style={[globalStyles.branchNameMiniContainer, {backgroundColor: dark?"#799E6A":"#446377", marginTop: 10, marginBottom: 10}]}>
                        <Text style={{color: "white", fontSize: isTallDevice?30:20, fontWeight: 'bold'}}>Notes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>{redirect('Subject')}} style={[globalStyles.branchNameMiniContainer, {backgroundColor: dark?"#799E6A":"#446377", marginTop: 10, marginBottom: 10}]}>
                        <Text style={{color: "white", fontSize: isTallDevice?30:20, fontWeight: 'bold'}}>PYQs</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[globalStyles.branchNameMiniContainer, {backgroundColor: dark?"#799E6A":"#446377", marginTop: 10, marginBottom: 10}]}>
                        <Text style={{color: "white", fontSize: isTallDevice?30:20, fontWeight: 'bold'}}>Exam Schedules</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>{redirect('SGPA')}} style={[globalStyles.branchNameMiniContainer, {backgroundColor: dark?"#799E6A":"#446377", marginTop: 10, marginBottom: 10}]}>
                        <Text style={{color: "white", fontSize: isTallDevice?30:20, fontWeight: 'bold'}}>SGPA Calculator</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[globalStyles.branchNameMiniContainer, {backgroundColor: dark?"#799E6A":"#446377", marginTop: 10, marginBottom: 10}]}>
                        <Text style={{color: "white", fontSize: isTallDevice?30:20, fontWeight: 'bold'}}>Notes Submission</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default Tools

const styles = StyleSheet.create({})