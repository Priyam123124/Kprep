import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import themeContext from './context/themeContext';
import React, { useContext, useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { globalStyles } from './Components/global_styles';
import Landing from './Components/Landing';
import Subject from './Components/Subject';
import Icon from 'react-native-vector-icons/FontAwesome'
import Nav from './Components/Nav';
import { NavigationContainer } from '@react-navigation/native';
import Otherscs from './Otherscs';
import Profile from './Components/Profile';
import ComingSoon from './Components/ComingSoon';
import ToDoList from './Components/ToDoList';
import Otherscs2 from './Otherscs2';
const bottom = createBottomTabNavigator()
const App2 = () => {
    const theme = useColorScheme()
    const context = useContext(themeContext)
    const { dark, setDark } = context

    useEffect(() => {
        if (theme === 'dark') {
            setDark(dark => false)
        } else {
            setDark(dark => true)
        }
        console.log(dark)
    }, [theme])
    return (
        <>
            <Nav />
            <NavigationContainer>
                <bottom.Navigator screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: dark ? globalStyles.themecolor.backgroundColor : globalStyles.themecolorDark.backgroundColor, marginLeft: 1, borderRadius: 5, marginRight: 0.5 }, tabBarActiveTintColor: 'white', tabBarInactiveTintColor: dark ? '#d0f7d2' : '#a6b5bf' }}>
                    <bottom.Screen name="Home" component={Otherscs2} options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="home" color={color} size={size} />
                        ), tabBarIconStyle: { marginTop: 5 }
                    }} />
                    <bottom.Screen name="Otherscs" component={Otherscs} options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="graduation-cap" color={color} size={size} />
                        ), tabBarIconStyle: { marginTop: 5 }
                    }} />
                    <bottom.Screen name="Coming Soon" component={ComingSoon} options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="cubes" color={color} size={size} />
                        ), tabBarIconStyle: { marginTop: 5 }
                    }} />
                    <bottom.Screen name="Pofile" component={Profile} options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="user" color={color} size={size} />
                        ), tabBarIconStyle: { marginTop: 5 }
                    }} />
                </bottom.Navigator>
            </NavigationContainer>

        </>
    )
}

export default App2

const styles = StyleSheet.create({})