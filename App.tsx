import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemeState from './context/ThemeState'
import App2 from './App2'

const App = () => {
  return (
    <>
    <ThemeState>
        <App2/>
    </ThemeState>
    </>
  )
}

export default App

const styles = StyleSheet.create({})