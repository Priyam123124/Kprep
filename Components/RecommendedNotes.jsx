import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React from 'react'
import { globalStyles } from './global_styles'

const RecommendedNotes = () => {
  return (
    <View style={globalStyles.bgGround}>
      {/* everything is wrapped inside a scrollview */}
    <ScrollView>
      {/* heading text */}
      <Text style={styles.headingtext}>Recommended Notes for CSE</Text>
    </ScrollView>
    </View>
  )
}

export default RecommendedNotes

const styles = StyleSheet.create({
    headingtext: {
        margin: 10,
        fontSize: 18,
        fontWeight: 900
    }
})