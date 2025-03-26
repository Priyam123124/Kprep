import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import themeContext from '../context/themeContext'
import React, { useContext } from 'react'
import { globalStyles } from './global_styles'

const Resources = () => {
    const context = useContext(themeContext)
    const { dark } = context
    return (
        <>
            <ScrollView style={[globalStyles.bgGround, { backgroundColor: !dark ? '#333333' : 'white' }]}>
                <Text style={[styles.headingtext, { color: dark ? 'black' : '#84CFFF' }]}>Resources</Text>
                <Text style={[styles.headingtext, { marginBottom: 0.5, fontFamily: 'Poppins-Regular', fontSize: 20, color: dark ? 'black' : 'white' }]}>HandWritten Notes</Text>
                <View>
                    <ScrollView horizontal style={{ flexDirection: 'row', width: '80%', marginLeft: 20 }}>
                        <TouchableOpacity>
                            <View style={[globalStyles.content_icon, { borderColor: dark ? '#487639' : '#5D8CAB' }]}></View>
                            <Text style={[globalStyles.content_icon, globalStyles.content_title, { borderColor: dark ? '#487639' : '#5D8CAB' }]}></Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={[globalStyles.content_icon, { borderColor: dark ? '#487639' : '#5D8CAB' }]}></View>
                            <Text style={[globalStyles.content_icon, globalStyles.content_title, { borderColor: dark ? '#487639' : '#5D8CAB' }]}></Text>
                        </TouchableOpacity>

                    </ScrollView>
                </View>

                <Text style={[styles.headingtext, { marginBottom: 0.5, fontFamily: 'Poppins-Regular', fontSize: 20, color: dark ? 'black' : 'white' }]}>Teachers' Notes</Text>
                <View>
                    <ScrollView horizontal style={{ flexDirection: 'row', width: '80%', marginLeft: 20 }}>
                    <TouchableOpacity>
                            <View style={[globalStyles.content_icon, { borderColor: dark ? '#487639' : '#5D8CAB' }]}></View>
                            <Text style={[globalStyles.content_icon, globalStyles.content_title, { borderColor: dark ? '#487639' : '#5D8CAB' }]}></Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={[globalStyles.content_icon, { borderColor: dark ? '#487639' : '#5D8CAB' }]}></View>
                            <Text style={[globalStyles.content_icon, globalStyles.content_title, { borderColor: dark ? '#487639' : '#5D8CAB' }]}></Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

                <Text style={[styles.headingtext, { marginBottom: 0.5, fontFamily: 'Poppins-Regular', fontSize: 20, color: dark ? 'black' : 'white' }]}>Extras</Text>
                <View>
                    <ScrollView horizontal style={{ flexDirection: 'row', width: '80%', marginLeft: 20 }}>
                    <TouchableOpacity>
                            <View style={[globalStyles.content_icon, { borderColor: dark ? '#487639' : '#5D8CAB' }]}></View>
                            <Text style={[globalStyles.content_icon, globalStyles.content_title, { borderColor: dark ? '#487639' : '#5D8CAB' }]}></Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={[globalStyles.content_icon, { borderColor: dark ? '#487639' : '#5D8CAB' }]}></View>
                            <Text style={[globalStyles.content_icon, globalStyles.content_title, { borderColor: dark ? '#487639' : '#5D8CAB' }]}></Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

            </ScrollView>
        </>
    )
}

export default Resources

const styles = StyleSheet.create({
    headingtext: {
        fontSize: 30,
        fontFamily: 'Poppins-SemiBold',
        margin: 20
    },
})