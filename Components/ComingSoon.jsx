import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from './global_styles'

const ComingSoon = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Coming Soon</Text>
    </View>
  )
}

export default ComingSoon

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f3d3'
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#78B961'
  }
})