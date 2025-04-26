import { StyleSheet, useColorScheme, View, BackHandler } from 'react-native';
import themeContext from './context/themeContext';
import React, { useContext, useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { globalStyles } from './Components/global_styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Nav from './Components/Nav';
import { NavigationContainer } from '@react-navigation/native';
import Otherscs from './Otherscs';
import Profile from './Components/Profile';
import ComingSoon from './Components/ComingSoon';
import Otherscs2 from './Otherscs2';
import Focus from './Components/Focus';
import Welcome from './Components/Welcome';
import Start from './Components/Start';
import BasicInfo from './Components/BasicInfo';

const bottom = createBottomTabNavigator();
const NativeStack = createNativeStackNavigator();

// Tab Navigator (BottomScreen)
const BottomScreen = () => {
  const { dark } = useContext(themeContext);
  return (
    <bottom.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: dark
            ? globalStyles.themecolor.backgroundColor
            : globalStyles.themecolorDark.backgroundColor,
          marginLeft: 1,
          borderRadius: 5,
          marginRight: 0.5,
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: dark ? '#d0f7d2' : '#a6b5bf',
      }}
    >
      <bottom.Screen
        name="Home"
        component={Otherscs2}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
          tabBarIconStyle: { marginTop: 5 },
        }}
      />
      <bottom.Screen
        name="Otherscs"
        component={Otherscs}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Icon name="graduation-cap" color={color} size={size} />
          ),
          tabBarIconStyle: { marginTop: 5 },
        }}
      />
      <bottom.Screen
        name="Coming Soon"
        component={ComingSoon}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Icon name="cubes" color={color} size={size} />
          ),
          tabBarIconStyle: { marginTop: 5 },
        }}
      />
      <bottom.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
          tabBarIconStyle: { marginTop: 5 },
        }}
      />
    </bottom.Navigator>
  );
};

// Wrapper to combine Nav and another component
const ScreenWithNav = ({ component: Component, ...props }) => {
  return (
    <View style={styles.container}>
      <Nav />
      <Component {...props} />
    </View>
  );
};

const App2 = () => {
  const theme = useColorScheme();
  const context = useContext(themeContext);
  const { dark, setDark, setPyq } = context;
  const [flag, setFlag] = useState(true)

  useEffect(() => {
    const backAction = () => {
      setPyq(false);
      return false; // Allow default navigation
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, [setPyq]);

  useEffect(() => {
    if (theme === 'dark') {
      setDark(false);
    } else {
      setDark(true);
    }
    console.log(dark);
  }, [theme]);

  return (
    <NavigationContainer>
    <NativeStack.Navigator screenOptions={{ headerShown: false }}>
        <NativeStack.Screen name="Start" component={Start}/>
        <NativeStack.Screen name="Welcome" component={Welcome}/>
        <NativeStack.Screen name="basic_info" component={BasicInfo}/>
        <NativeStack.Screen
          name="main"
          component={(props) => <ScreenWithNav component={BottomScreen} {...props} />}
        />
        <NativeStack.Screen
          name="focus"
          component={(props) => <ScreenWithNav component={Focus} {...props} />}
        />
      </NativeStack.Navigator>
    </NavigationContainer>
  );
};

export default App2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});