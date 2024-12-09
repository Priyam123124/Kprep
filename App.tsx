import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Nav from './Components/Nav';
import Notes from './Components/Notes';
const App = () => {
  return (
    <>
    <Nav/>
    <Notes/>
    </>
  );
}

export default App;

const styles = StyleSheet.create({});
