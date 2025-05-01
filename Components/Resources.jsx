import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native'
import themeContext from '../context/themeContext'
import React, { useContext } from 'react'
import { globalStyles } from './global_styles'

const { width, height } = Dimensions.get('window')
const isTallDevice = width >= 800

const Resources = () => {
    const context = useContext(themeContext)
    const { dark } = context
    return (
        <>
            <ScrollView style={[globalStyles.bgGround, { backgroundColor: !dark ? '#333333' : 'white' }]}>
                <Text style={[styles.headingtext, { color: dark ? 'black' : '#84CFFF' }]}>Resources</Text>
                <Text style={[styles.headingtext, { marginBottom: 0.5, fontFamily: 'Poppins-Regular', fontSize: isTallDevice ? 30 : 20, color: dark ? 'black' : 'white' }]}>HandWritten Notes</Text>
                <View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', width: '90%', marginLeft: 20 }}>
                        {Array(8).fill(0).map((_, index) => (
                            <TouchableOpacity key={index}>
                                <View style={[globalStyles.content_icon, { borderColor: dark ? '#487639' : '#5D8CAB' }]}>
                                    <Image
                                        source={require('../Components/Images/freepdf.png')}
                                        style={{ width: isTallDevice ? 120 : 70, height: isTallDevice ? 120 : 70 }}
                                        resizeMode="contain"
                                    />
                                    <Text
                                        style={{
                                            marginTop: 8,
                                            fontSize: isTallDevice ? 20 : 12,
                                            fontFamily: 'Comfortaa-Bold',
                                            color: dark ? '#000' : '#FFF',
                                            textAlign: 'center',
                                        }}>
                                        COA PDF
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ))}

                    </ScrollView>
                </View>

                <Text style={[styles.headingtext, { marginBottom: 0.5, fontFamily: 'Poppins-Regular', fontSize: isTallDevice ? 30 : 20, color: dark ? 'black' : 'white' }]}>Teachers' Notes</Text>
                <View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', width: '90%', marginLeft: 20 }}>
                        {Array(8).fill(0).map((_, index) => (
                            <TouchableOpacity key={index}>
                                <View style={[globalStyles.content_icon, { borderColor: dark ? '#487639' : '#5D8CAB' }]}>
                                    <Image
                                        source={require('../Components/Images/freepdf.png')}
                                        style={{ width: isTallDevice ? 120 : 70, height: isTallDevice ? 120 : 70 }}
                                        resizeMode="contain"
                                    />
                                    <Text
                                        style={{
                                            marginTop: 8,
                                            fontSize: isTallDevice ? 20 : 12,
                                            fontFamily: 'Comfortaa-Bold',
                                            color: dark ? '#000' : '#FFF',
                                            textAlign: 'center',
                                        }}>
                                        COA PDF
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                <Text style={[styles.headingtext, { marginBottom: 0.5, fontFamily: 'Poppins-Regular', fontSize: isTallDevice ? 30 : 20, color: dark ? 'black' : 'white' }]}>Extras</Text>
                <View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row', width: '90%', marginLeft: 20 }}>
                        {Array(8).fill(0).map((_, index) => (
                            <TouchableOpacity key={index}>
                                <View style={[globalStyles.content_icon, { borderColor: dark ? '#487639' : '#5D8CAB' }]}>
                                    <Image
                                        source={require('../Components/Images/freepdf.png')}
                                        style={{ width: isTallDevice ? 120 : 70, height: isTallDevice ? 120 : 70 }}
                                        resizeMode="contain"
                                    />
                                    <Text
                                        style={{
                                            marginTop: 8,
                                            fontSize: isTallDevice ? 20 : 12,
                                            fontFamily: 'Comfortaa-Bold',
                                            color: dark ? '#000' : '#FFF',
                                            textAlign: 'center',
                                        }}>
                                        COA PDF
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

            </ScrollView>
        </>
    )
}

export default Resources

const styles = StyleSheet.create({
    headingtext: {
        fontSize: isTallDevice ? 50 : 30,
        fontFamily: 'Poppins-SemiBold',
        margin: 20
    },
})