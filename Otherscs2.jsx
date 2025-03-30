import React, { useEffect, useContext } from 'react';
import themeContext from './context/themeContext';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Subject from './Components/Subject';
import SGPA from './Components/SGPA';
import Resources from './Components/Resources';
import NotesSelection from './Components/NotesSelection';
import Tools from './Components/Tools';
import ToDoList from './Components/ToDoList';
import Landing from './Components/Landing';

const Stack = createNativeStackNavigator();

const Otherscs2 = () => {
  const context = useContext(themeContext)
  const { dark, setDark } = context
  return (
    <>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Landing" component={Landing} />
          <Stack.Screen name='ToDoList' component={ToDoList}/>
        </Stack.Navigator>
    </>
  );
}

export default Otherscs2;

const styles = StyleSheet.create({});
