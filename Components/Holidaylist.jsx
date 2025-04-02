import { ScrollView, StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('window')
const isTallDevice = width >= 800

const Holidaylist = () => {
    return (
        <>
            <View style={{ alignItems: 'center', width: "100%" }}>
                <Text style={{ width: '90%', fontFamily: 'Poppins-Bold', fontSize: isTallDevice?40:25, marginTop: 40 }}>Holiday List</Text>
                <View style={{ width: '90%', borderWidth: 1, borderStyle: 'solid', borderColor: 'black', height: '75%', marginTop: 20 }}>
                    <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', height: "13%", borderBottomWidth: 1, borderStyle: 'solid', borderColor: 'black', backgroundColor: '#587C4D' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%' }}>
                            <Text style={styles.coltext}>DATE</Text>
                            <Text style={styles.coltext}>EVENT</Text>
                        </View>
                    </View>

                    <ScrollView style={{width: '100%', backgroundColor: '#F0FBE6'}}>
                    {Array.from({ length: 20 }, (_, i) => (
                        <View key={i} style={{ width: '100%', alignItems: 'center' }}>
                        <View style={styles.calenderlist}>
                            <Text style={styles.calenderitemlist}>15/7/2025</Text>
                            <Text style={styles.calenderitemlist}>Lorem epsium</Text>
                        </View>
                    </View>
                    ))}
                    
                    </ScrollView>
                    
                </View>
            </View>
        </>
    )
}

export default Holidaylist

const styles = StyleSheet.create({
    coltext: {
        fontFamily: 'Poppins-Bold',
        color: 'white',
        fontSize: isTallDevice?35:20,
        letterSpacing: 0.3
    },
    calenderlist: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        width: '80%', 
        marginTop: 5
    },
    calenderitemlist: {
        fontFamily: 'Poppins-Regular',
        fontSize: isTallDevice?25:15
    }
})