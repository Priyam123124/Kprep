import { ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { globalStyles } from './global_styles'

const { width, height } = Dimensions.get('window')
const isTallDevice = width >= 800

const Holidaylist = () => {
    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center', width: "100%" }}>
                <Text style={styles.title}>Holiday List</Text>
                <View style={styles.mainContainer}>
                    <View style={styles.header}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%' }}>
                            <Text style={styles.coltext}>DATE</Text>
                            <Text style={styles.coltext}>EVENT</Text>
                        </View>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false} style={styles.listContainer}>
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
        </View>
    )
}

export default Holidaylist

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f3d3'
    },
    title: {
        width: '90%',
        fontFamily: 'Poppins-Bold',
        fontSize: isTallDevice ? 40 : 25,
        marginTop: 40,
        color: '#333'
    },
    mainContainer: {
        width: '90%',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#78B961',
        height: '75%',
        marginTop: 20,
        borderRadius: 15,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3
    },
    header: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: "13%",
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#78B961',
        backgroundColor: '#78B961'
    },
    coltext: {
        fontFamily: 'Poppins-Bold',
        color: 'white',
        fontSize: isTallDevice ? 35 : 20,
        letterSpacing: 0.3
    },
    listContainer: {
        width: '100%',
        backgroundColor: '#f5f3d3'
    },
    calenderlist: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: 5,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    calenderitemlist: {
        fontFamily: 'Poppins-Regular',
        fontSize: isTallDevice ? 25 : 15,
        color: '#333'
    }
})