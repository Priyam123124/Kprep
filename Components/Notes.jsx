import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import React from 'react'
import { globalStyles } from './global_styles'
import Icon from 'react-native-vector-icons/FontAwesome'

const Notes = () => {
  return (
    <View style={globalStyles.bgGround}>
    <ScrollView>
      <Text style={styles.headingtext}>Recommended Notes for CSE</Text>
      <View style={styles.yearNotes}>
         <Text style={styles.headingtext}>1st Year Notes:</Text>
         <TouchableOpacity style={[styles.viewMore, globalStyles.themecolor]}>
            <Text style={{color: "white"}}>View More</Text>
            <Icon style={{marginLeft: 10}} name="arrow-right" size={20} color="white"/>
         </TouchableOpacity>
      </View>
      <View style={styles.notesContent}>
      <ScrollView style={{flexDirection: "column"}} horizontal={true}>
        <View>
        <Text>Hellow World</Text>
        </View>
      </ScrollView>
      </View>

      <View style={styles.yearNotes}>
         <Text style={styles.headingtext}>2nd Year Notes:</Text>
         <TouchableOpacity style={[styles.viewMore, globalStyles.themecolor]}>
            <Text style={{color: "white"}}>View More</Text>
            <Icon style={{marginLeft: 10}} name="arrow-right" size={20} color="white"/>
         </TouchableOpacity>
      </View>
      <View style={styles.notesContent}>
      <ScrollView style={{flexDirection: "column"}} horizontal={true}>
        <View>
        <Text>Hellow World</Text>
        </View>
      </ScrollView>
      </View>

      <View style={styles.yearNotes}>
         <Text style={styles.headingtext}>3rd Year Notes:</Text>
         <TouchableOpacity style={[styles.viewMore, globalStyles.themecolor]}>
            <Text style={{color: "white"}}>View More</Text>
            <Icon style={{marginLeft: 10}} name="arrow-right" size={20} color="white"/>
         </TouchableOpacity>
      </View>
      <View style={styles.notesContent}>
      <ScrollView style={{flexDirection: "column"}} horizontal={true}>
        <View>
        <Text>Hellow World</Text>
        </View>
      </ScrollView>
      </View>

      <View style={styles.yearNotes}>
         <Text style={styles.headingtext}>4th Year Notes:</Text>
         <TouchableOpacity style={[styles.viewMore, globalStyles.themecolor]}>
            <Text style={{color: "white"}}>View More</Text>
            <Icon style={{marginLeft: 10}} name="arrow-right" size={20} color="white"/>
         </TouchableOpacity>
      </View>
      <View style={styles.notesContent}>
      <ScrollView style={{flexDirection: "column"}} horizontal={true}>
        <View>
        <Text>Hellow World</Text>
        </View>
      </ScrollView>
      </View>
    </ScrollView>
    </View>
  )
}

export default Notes

const styles = StyleSheet.create({
    headingtext: {
        margin: 10,
        fontSize: 18,
        fontWeight: 900
    },
    yearNotes: {
        flexDirection: "row",
        alignItems: 'center'
    },
    viewMore: {
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row',
        height: 35,
        width: 125,
        borderRadius: 10,
    },
    notesContent: {
        margin: 10,
        borderColor: "black",
        borderWidth: 0.2,
        borderStyle: "solid",
        height: 350,
        borderRadius: 10,
    }
})