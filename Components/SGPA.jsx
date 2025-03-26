import { StyleSheet, Text,ScrollView, TouchableOpacity, View } from 'react-native'
import React, {useContext} from 'react'
import { globalStyles } from './global_styles'
import themeContext from '../context/themeContext'

const SGPA = () => {
    const context = useContext(themeContext)
    const { dark } = context

    const styles = StyleSheet.create({
        title: {
            margin: 20
        },
        headtext: {
            fontFamily: 'Poppins-SemiBold',
            color: dark?'#143F07': 'white',
            fontSize: 22
        },
        flex: {
            flexDirection: 'row'
        },
        picker: {
            borderWidth: 0.2,
            borderColor: dark?'black': 'white',
            borderStyle: 'solid',
            width: '32%',
            height: 30,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center'
        },
        mleft: {
            marginLeft: 8
        },
        button: {
            width: '100%',
            height: 35,
            borderRadius: 50,
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1.5,
            backgroundColor: dark?'#769A6B':'#446377',
            borderColor: 'black',
            borderStyle: 'solid',
        }
    })
    return (
        <>
            <ScrollView style={{backgroundColor: dark?'white':'#333333'}}>
                <View style={styles.title}>
                <Text style={styles.headtext}>SGPA Calculator</Text>
                <View style={[styles.flex, {marginTop: 20}]}>
                    <View style={styles.picker}><Text style={{fontFamily: 'ComicNeue-Regular', color: dark?'black':'white'}}>Branch</Text></View>
                    <View style={[styles.picker, styles.mleft]}><Text style={{fontFamily: 'ComicNeue-Regular', color: dark?'black':'white'}}>Semester</Text></View>
                    <View style={[styles.picker, styles.mleft]}><Text style={{fontFamily: 'ComicNeue-Regular', color: dark?'black':'white'}}>Year</Text></View>
                </View>
                <View style={[styles.picker, {marginTop: 25, borderColor: 'white', marginBottom: 15, backgroundColor: dark?'#E9E5C9':'#c3be97'}]}><Text style={{fontFamily: 'ComicNeue-Regular', color: 'black'}}>Load Course</Text></View>

                <View style={[styles.flex, {marginTop: 10}]}>
                    <View style={[styles.picker, {width: '40%'}]}><Text style={{fontFamily: 'ComicNeue-Regular', color: dark?'black':'white'}}>Subject</Text></View>
                    <View style={[styles.picker, styles.mleft, {width: '28%'}]}><Text style={{fontFamily: 'ComicNeue-Regular', color: dark?'black':'white'}}>Credit</Text></View>
                    <View style={[styles.picker, styles.mleft, {width: '28%'}]}><Text style={{fontFamily: 'ComicNeue-Regular', color: dark?'black':'white'}}>Marks</Text></View>
                </View>

                <View style={[styles.flex, {marginTop: 10}]}>
                    <View style={[styles.picker, {width: '40%'}]}></View>
                    <View style={[styles.picker, styles.mleft, {width: '28%'}]}></View>
                    <View style={[styles.picker, styles.mleft, {width: '28%'}]}></View>
                </View>

                <View style={[styles.flex, {marginTop: 10}]}>
                    <View style={[styles.picker, {width: '40%'}]}></View>
                    <View style={[styles.picker, styles.mleft, {width: '28%'}]}></View>
                    <View style={[styles.picker, styles.mleft, {width: '28%'}]}></View>
                </View>

                <View style={[styles.flex, {marginTop: 10}]}>
                    <View style={[styles.picker, {width: '40%'}]}></View>
                    <View style={[styles.picker, styles.mleft, {width: '28%'}]}></View>
                    <View style={[styles.picker, styles.mleft, {width: '28%'}]}></View>
                </View>

                <View style={[styles.flex, {marginTop: 10}]}>
                    <View style={[styles.picker, {width: '40%'}]}></View>
                    <View style={[styles.picker, styles.mleft, {width: '28%'}]}></View>
                    <View style={[styles.picker, styles.mleft, {width: '28%'}]}></View>
                </View>

                <View style={[styles.flex, {marginTop: 10}]}>
                    <View style={[styles.picker, {width: '40%'}]}></View>
                    <View style={[styles.picker, styles.mleft, {width: '28%'}]}></View>
                    <View style={[styles.picker, styles.mleft, {width: '28%'}]}></View>
                </View>

                <View style={[styles.flex, {marginTop: 10}]}>
                    <View style={[styles.picker, {width: '40%'}]}></View>
                    <View style={[styles.picker, styles.mleft, {width: '28%'}]}></View>
                    <View style={[styles.picker, styles.mleft, {width: '28%'}]}></View>
                </View>

                <View style={[styles.flex, {marginTop: 10}]}>
                    <View style={[styles.picker, {width: '40%'}]}></View>
                    <View style={[styles.picker, styles.mleft, {width: '28%'}]}></View>
                    <View style={[styles.picker, styles.mleft, {width: '28%'}]}></View>
                </View>

                <View style={[styles.picker, {marginTop: 25, borderColor: 'white', backgroundColor: dark?'#E9E5C9':'#c3be97'}]}><Text style={{fontFamily: 'ComicNeue-Regular'}}>Add Subject</Text></View>

                <TouchableOpacity style={[styles.button]}>
                    <Text style={{fontFamily: 'ComicNeue-BoldItalic', color: 'white', fontSize: 17}}>Calculate SGPA</Text>
                </TouchableOpacity>
                </View>
                
            </ScrollView>
        </>
    )
}

export default SGPA

