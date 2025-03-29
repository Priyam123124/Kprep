import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, useColorScheme, View, Dimensions } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import themeContext from '../context/themeContext'
import LinearGradient from 'react-native-linear-gradient'
import { globalStyles } from './global_styles'

const Landing = () => {
    const context = useContext(themeContext)
    const [greet, setGreet] = useState("")
    const [day, setDay] = useState(0)
    const [mon, setMon] = useState("October")
    const [year, setYear] = useState(0)
    const { dark } = context
    const {width, height} = Dimensions.get('window')
    const isTallDevice = width >=800 
    console.log(isTallDevice)
    useEffect(()=>{
        const interval = setInterval(() => {
            const a = new Date()
            const h = a.getHours()
            const m = a.getMonth()
            const y = a.getFullYear()
            const d = a.getDate()
            // console.log(s)
            if (h >= 0 && h <= 11) {
                setGreet("Good Morning")
            }
            if (h >= 12 && h <= 17) {
                setGreet("Good Afternoon")
            }
    
            if (h >= 18 && h <= 23) {
                setGreet("Good Evening")
            }
    
            switch(m) {
                case 0:
                    setMon("January")
                    break
                case 1:
                    setMon("February")
                    break
                case 2:
                    setMon("March")
                    break
                case 3:
                    setMon("April")
                    break;
                case 4:
                    setMon("May")
                    break
                case 5:
                    setMon("June")
                    break
                case 6:
                    setMon("July")
                    break
                case 7:
                    setMon("August")
                    break
                case 8:
                    setMon("September")
                    break
                case 9:
                    setMon("October")
                    break
                case 10:
                    setMon("November")
                    break
                case 11:
                    setMon("December")
                    break
            }
            setDay(d)
            setYear(y)
        }, 1000)
        return () => clearInterval(interval);
    },[])

    const gradientColor = dark
        ? ['#75A665', '#9DC17B', '#CAE5B0', '#9DC17B', '#75A665']
        : ['#333333', '#5F727F', '#8DB4CE']  // Fixed missing `#` in last color    
    const styles = StyleSheet.create({
        welcome: {
            borderColor: dark ? 'black' : '#8DB4CE',
            backgroundColor: dark ? '#F7FFEB' : '#333333',
            borderWidth: 1,
            borderStyle: 'solid',
            width: '95%',
            height: isTallDevice? 400 : 230,
            marginTop: 10,
            borderRadius: 5,
        },
        welcome_font: {
            fontSize: isTallDevice?45:22,
            // fontWeight: 'bold',
            fontFamily: 'Poppins-Bold',
            marginRight: 20,
        },
        welcome_font2: {
            marginLeft: 10,
            marginTop: 40,
            fontFamily: 'ComicNeue-Regular',
            letterSpacing: 0.3,
            marginRight: 20,
            fontSize: isTallDevice?30:15,
            color: dark ? 'black' : 'white'
        },
        profile_image: {
            width: 60,
            height: 60,
            borderColor: 'black',
            borderWidth: 1,
            borderStyle: 'solid',
            margin: 15,
            borderRadius: 50, // Fixed invalid borderRadius
        },
        quickaccess: {
            marginTop: 20,
            width: "80%",
            borderRadius: 5,
            backgroundColor: dark ? '#FFF9D0' : '#202020',
            borderWidth: 0.2,
            borderColor: 'black',
            borderStyle: 'solid',
        },
        quickaccesscontainer: {
            width: '95%',
            justifyContent: 'center',
            alignItems: 'center',
            height: isTallDevice?90:60,
            borderRadius: 5,
            marginTop: 5,
            marginBottom: 5,
        }
    })

    return (
        <View style={{ backgroundColor: !dark ? '#333333' : 'white' }}>
            <ScrollView>
                <View style={{ alignItems: 'center' }}>
                    <View style={styles.welcome}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Image
                                style={{ width: isTallDevice?250:140, height: isTallDevice?180:90, marginTop: 60, marginLeft: '5%' }}
                                source={dark ? require('./Images/topi.png') : require('./Images/topi-dark.png')}
                            />
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={[styles.welcome_font2, { marginRight: 15 }]}>{day}th {mon} {year}</Text>
                                <Text style={[styles.welcome_font, { marginRight: 10, marginTop: 10, color: dark ? 'black' : 'white' }]}>
                                    {greet},
                                </Text>
                                <Text style={[dark ? globalStyles.textcolor : globalStyles.textcolorDark, styles.welcome_font, { marginRight: 10 }]}>
                                    Priyam
                                </Text>
                            </View>
                        </View>
                        <View style={{ width: '100%', flexDirection: 'row-reverse' }}>
                            <Text style={[styles.welcome_font2, { marginRight: 15, marginTop: 5, width: '80%', textAlign: 'right' }]}>Did you do anything productive today? Here’s a list of every important thing you have ignored this week...</Text>
                        </View>
                    </View>

                    <View style={styles.quickaccess}>
                        <Text style={{ color: '#5B8699', fontFamily: 'Comfortaa-VariableFont_wght', fontSize: isTallDevice?27:17, margin: 5 }}>Quick Access</Text>

                        {/* Fixed Gradient Issue in Buttons */}
                        {["To Do List", "Upcoming Exams", "Holiday List"].map((item, index) => (
                            <View key={index} style={{ width: "100%", justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity style={styles.quickaccesscontainer}>
                                    <LinearGradient
                                        colors={gradientColor}  // Corrected: Using dynamic colors
                                        start={{ x: 0, y: 0.5 }}
                                        end={{ x: 1, y: 0.5 }}
                                        locations={[0, 0.2517, 0.55, 0.7417, 1]}
                                        style={styles.quickaccesscontainer}>
                                        <Text style={[{ fontFamily: 'Comfortaa-VariableFont_wght', fontSize: isTallDevice?28:18, fontWeight: 'normal' }]}>
                                            {item}
                                        </Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>

                    <Text style={[{ color: dark ? '#1F3418' : '#5D8CAB' }, { marginTop: 20, fontSize: isTallDevice?28:18, fontFamily: 'Comfortaa-VariableFont_wght' }]}>Recently Visited</Text>
                    <ScrollView horizontal style={{ flexDirection: 'row', width: '80%' }}>
                        <TouchableOpacity>
                            <View style={[globalStyles.content_icon, { borderColor: dark ? '#487639' : '#5D8CAB' }]}></View>
                            <Text style={[globalStyles.content_icon, globalStyles.content_title, { borderColor: dark ? '#487639' : '#5D8CAB' }]}></Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={[globalStyles.content_icon, { borderColor: dark ? '#487639' : '#5D8CAB' }]}></View>
                            <Text style={[globalStyles.content_icon, globalStyles.content_title, { borderColor: dark ? '#487639' : '#5D8CAB' }]}></Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={[globalStyles.content_icon, { borderColor: dark ? '#487639' : '#5D8CAB' }]}></View>
                            <Text style={[globalStyles.content_icon, globalStyles.content_title, { borderColor: dark ? '#487639' : '#5D8CAB' }]}></Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={[globalStyles.content_icon, { borderColor: dark ? '#487639' : '#5D8CAB' }]}></View>
                            <Text style={[globalStyles.content_icon, globalStyles.content_title, { borderColor: dark ? '#487639' : '#5D8CAB' }]}></Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={[globalStyles.content_icon, { borderColor: dark ? '#487639' : '#5D8CAB' }]}></View>
                            <Text style={[globalStyles.content_icon, globalStyles.content_title, { borderColor: dark ? '#487639' : '#5D8CAB' }]}></Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={[globalStyles.content_icon, { borderColor: dark ? '#487639' : '#5D8CAB' }]}></View>
                            <Text style={[globalStyles.content_icon, globalStyles.content_title, { borderColor: dark ? '#487639' : '#5D8CAB' }]}></Text>
                        </TouchableOpacity>

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

                <View style={{ alignItems: 'center' }}>
                    <Text style={[{ marginTop: 20, fontSize: isTallDevice?28:18, fontFamily: 'Comfortaa-VariableFont_wght', color: dark ? '#1F3418' : '#5D8CAB' }]}>Feedback Form</Text>
                    <View style={{ backgroundColor: !dark ? '#333333' : '', borderWidth: 1, borderBlockColor: 'black', borderStyle: 'solid', borderRadius: 5, marginTop: 20, width: "80%", height: isTallDevice?400:200 }}></View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Landing
