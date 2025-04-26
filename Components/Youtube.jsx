import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const { width, height } = Dimensions.get('window')
const isTallDevice = width >= 800

const Youtube = () => {
    return (
        <View>
            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: isTallDevice ? 40 : 22, fontWeight: '800', margin: 20 }}>Online Videos</Text>
            <View style={styles.sort}>
                <View style={styles.sort1}><Text style={{fontSize:isTallDevice?30:15}}>Sort By</Text></View>
                <View style={styles.sort1}><Text style={{fontSize:isTallDevice?30:15}}>Subject</Text></View>
            </View>

            <View style={{width: '100%'}}>
            <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
                {Array.from({ length: 10}).map((_, index) => (
                    <TouchableOpacity key={index} style={styles.videosection}>
                    <View style={{marginTop: 15}}>
                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.iconbox}>
                                    <Icon name="play" size={isTallDevice?70:30} color="white" />
                                </View>

                                <View style={{ marginLeft: 15, marginTop: 7 }}>
                                    <Text style={styles.font}>ML (Clustering)</Text>
                                    <Text style={styles.font}>Mahesh Huddar</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 5 }}>
                                <Icon name="star" size={isTallDevice?25:15} color="black" />
                                <Icon name="star" size={isTallDevice?25:15} color="black" />
                                <Icon name="star" size={isTallDevice?25:15} color="black" />
                                <Icon name="star" size={isTallDevice?25:15} color="black" />
                                <Icon name="star" size={isTallDevice?25:15} color="black" />
                            </View>
                        </View>
                    </View>
                    <View style={{marginTop: 10, marginRight: 5}}>
                        <Text style={styles.font}>No of Videos 31</Text>
                        <TouchableOpacity style={styles.watch}><Text style={[styles.font, {color: '#FF0000'}]}>Watch</Text></TouchableOpacity>
                    </View>
                </TouchableOpacity>
                ))}
            </ScrollView>
            </View>
        </View>
    )
}

export default Youtube

const styles = StyleSheet.create({
    sort: {
        width: '100%',
        flexDirection: 'row-reverse'
    },
    sort1: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        marginRight: 20,
        width: isTallDevice?200:65,
        justifyContent: 'center',
        alignItems: 'center',
        height: isTallDevice?50:25,
        borderRadius: 1000
    },
    videosection: {
        width: '90%',
        height: isTallDevice?150:100,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: '#EBFCDB',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconbox: {
        width: isTallDevice?140:70,
        height: isTallDevice?90:50,
        borderRadius: 10,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    font: {
        fontFamily: 'Poppins-Regular',
        fontSize: isTallDevice?25:12
    },
    watch: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#FF0000',
        width: isTallDevice?120:70,
        height: isTallDevice?40:26,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})