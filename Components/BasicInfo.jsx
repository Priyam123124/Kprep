import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import themeContext from '../context/themeContext'

const BasicInfo = () => {
    const context = useContext(themeContext)
    const { dark } = context
    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%'
        },
        infoContainer: {
            backgroundColor: dark?'#587C4D':'black',
            width: '90%',
            height: 600,
            borderRadius: 20
        },
        text: {
            fontFamily: 'ComicNeue-Regular',
            color: '#E9E5C9',
            marginTop: 20,
            marginLeft: 20,
            fontSize: 18
        },
        inputfield: {
            backgroundColor: '#FFFCE4',
            width: '90%',
            borderRadius: 10,
            marginLeft: 15,
            marginTop: 10,
            color: 'black'
        },
        container2: {
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
        },
        button: {
            backgroundColor: '#446377',
            width: '27%',
            height: '25%',
            borderRadius: 10,
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center'
        }
    })
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontFamily: 'calibri-bold', color: 'white', fontSize: 22, marginTop: 50}}>Basic Information</Text>
        </View>
        <View style={{width: '100%'}}>
            <Text style={styles.text}>Your Name</Text>
            <TextInput style={styles.inputfield} placeholder='Your Name'/>

            <Text style={styles.text}>Contact Person Name</Text>
            <TextInput style={styles.inputfield} placeholder='Contact Person Name'/>

            <View style={styles.container2}>
                <View style={{width: '35%'}}>
                <Text style={styles.text}>Country</Text>
                <TextInput style={[styles.inputfield, {width: '100%'}]} placeholder='India'/>
                </View>

                <View style={{width: '35%'}}>
                    <View style={{width: '100%',marginLeft: '60%'}}>
                    <Text style={[styles.text]}>State</Text>
                    </View>
                <TextInput style={[styles.inputfield, {width: '100%', marginLeft: '70%'}]} placeholder='Select State'/>
                </View>
            </View>

            <View style={styles.container2}>
                <View style={{width: '35%'}}>
                <Text style={styles.text}>City</Text>
                <TextInput style={[styles.inputfield, {width: '100%'}]} placeholder='Select City'/>
                </View>

                <View style={{width: '35%'}}>
                    <View style={{width: '100%',marginLeft: '60%'}}>
                    <Text style={[styles.text]}>Mobile</Text>
                    </View>
                <TextInput style={[styles.inputfield, {width: '100%', marginLeft: '70%'}]} placeholder='7895438291'/>
                </View>
            </View>

            <Text style={[styles.text, {marginLeft: '15%'}]}>Email</Text>
            <TextInput style={[styles.inputfield, {width: '80%', marginLeft: '10%'}]} placeholder='Contact Person Name'/>

            <View style={{width: '100%', alignItems: 'center'}}>
                <TouchableOpacity style={styles.button}>
                    <Text style={{fontFamily: 'ComicNeue-Bold', color: 'white',fontSize: 18}}>SAVE</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    </View>
  )
}

export default BasicInfo