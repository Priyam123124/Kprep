import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './Components/Nav';
import RecommendedNotes from './Components/RecommendedNotes';
import Branch from './Components/Branch';
import Year from './Components/Year';
import Scheme from './Components/Scheme';
import Subject from './Components/Subject';
import Resources from './Components/Resources';
const App = () => {
  return (
    <>
    <Nav/>
    {/* <RecommendedNotes/> */}
    {/* <Branch/> */}
    <Year/>
    {/* <Scheme/> */}
    {/* <Subject/> */}
    {/* <Resources/> */}
    </>
  );
}

export default App;

const styles = StyleSheet.create({});
