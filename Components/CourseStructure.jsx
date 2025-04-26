import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

const { width, height } = Dimensions.get('window')
const isTallDevice = width >= 800
const arr = [
    {
        iconName: 'book-open',
        title: 'Theory'
    },
    {
        iconName: 'microscope',
        title: 'Practical'
    },
    {
        iconName: 'hammer',
        title: 'Sessional'
    }
];
const CourseStructure = () => {
    return (
        <View>
            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: isTallDevice ? 40 : 22, fontWeight: '800', margin: 20 }}>COURSE STRUCTURE</Text>
            <Text style={{ fontFamily: 'Poppins-Regular', marginLeft: 20, fontSize: isTallDevice?40:22 }}>Semester</Text>
            <ScrollView contentContainerStyle={{ width: '100%', alignItems: 'center', paddingBottom: 150 }}>
                {arr.map((i, e) => {
                    return (
                        <View key={e}>
                            <View style={{ flexDirection: 'row', width: '90%', marginTop: 10 }}>
                                <Icon name={i.iconName} size={isTallDevice?25:15} color="black" />
                                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: isTallDevice?25:15, marginLeft: 5 }}>{i.title}</Text>
                            </View>
                            <View style={styles.container}>
                                <View style={styles.column}>
                                    <Text style={[styles.text, { marginLeft: 5, color: 'white' }]}>Code</Text>
                                    <Text style={[styles.text, {color: 'white'}]}>Subject Name</Text>
                                    <Text style={[styles.text, { marginRight: 5, color: 'white' }]}>Credit</Text>
                                </View>

                                {Array.from({ length: 3 }).map((_, index) => (
                                    <View key={index} style={[styles.column, { backgroundColor: 'white', height: isTallDevice?70:60, borderBottomColor: 'black', borderBottomWidth: 1, borderBottomStyle: 'solid' }]}>
                                        <Text style={[styles.text, { marginLeft: 5 }]}>PH10001</Text>
                                        <Text style={styles.text}>Physics</Text>
                                        <Text style={[styles.text, { marginRight: 5 }]}>3 credit</Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default CourseStructure

const styles = StyleSheet.create({
    container: {
        width: '90%',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        borderBottomColor: 'white'
    },
    column: {
        width: '100%',
        height: isTallDevice?90:70,
        backgroundColor: '#83B674',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontFamily: 'ComicNeue-Regular',
        fontSize: isTallDevice?25:15
    }
})