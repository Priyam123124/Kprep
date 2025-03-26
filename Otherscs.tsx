import React, { useEffect, useContext } from 'react';
import themeContext from './context/themeContext';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Subject from './Components/Subject';
import SGPA from './Components/SGPA';
import Resources from './Components/Resources';
import NotesSelection from './Components/NotesSelection';
import Tools from './Components/Tools';

const Stack = createNativeStackNavigator();

const Otherscs = () => {
  const context = useContext(themeContext)
  const { dark, setDark } = context
  return (
    <>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Tools" component={Tools} />
          <Stack.Screen name="Subject" component={Subject} />
          <Stack.Screen name="SGPA" component={SGPA} />
          <Stack.Screen name="Resources" component={Resources} />
          <Stack.Screen name="NotesSelection" component={NotesSelection} />
        </Stack.Navigator>
    </>
  );
}

export default Otherscs;

const styles = StyleSheet.create({});
