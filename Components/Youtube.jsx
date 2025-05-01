import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { globalStyles } from './global_styles'
import LinearGradient from 'react-native-linear-gradient'

const { width, height } = Dimensions.get('window')
const isTallDevice = width >= 800

const Youtube = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}>Online Videos</Text>
            <View style={styles.sort}>
                <View style={styles.sort1}><Text style={styles.sortText}>Sort By</Text></View>
                <View style={styles.sort1}><Text style={styles.sortText}>Subject</Text></View>
            </View>

            <View style={{ width: '100%' }}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center', paddingBottom: 20 }}>
                    {Array.from({ length: 10 }).map((_, index) => (
                        <TouchableOpacity key={index} style={styles.videosection}>
                            <View style={{ marginTop: 15 }}>
                                <View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={styles.iconbox}>
                                            <Icon name="play" size={isTallDevice ? 70 : 30} color="white" />
                                        </View>

                                        <View style={{ marginLeft: 15, marginTop: 7 }}>
                                            <Text style={styles.font}>ML (Clustering)</Text>
                                            <Text style={styles.font}>Mahesh Huddar</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 5 }}>
                                        <Icon name="star" size={isTallDevice ? 25 : 15} color="#78B961" />
                                        <Icon name="star" size={isTallDevice ? 25 : 15} color="#78B961" />
                                        <Icon name="star" size={isTallDevice ? 25 : 15} color="#78B961" />
                                        <Icon name="star" size={isTallDevice ? 25 : 15} color="#78B961" />
                                        <Icon name="star" size={isTallDevice ? 25 : 15} color="#78B961" />
                                    </View>
                                </View>
                            </View>
                            <View style={{ marginTop: 10, marginRight: 15 }}>
                                <Text style={styles.font}>No of Videos 31</Text>
                                <TouchableOpacity style={styles.watch}>
                                    <LinearGradient
                                        colors={['#FFFDD0', '#78B961']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 0, y: 1 }}
                                        style={styles.watchGradient}
                                    >
                                        <Text style={[styles.font, { color: '#333' }]}>Watch</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
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
    container: {
        flex: 1,
        backgroundColor: '#f5f3d3',
        padding: 10
    },
    pageTitle: {
        fontFamily: 'Poppins-Regular',
        fontSize: isTallDevice ? 40 : 22,
        fontWeight: '800',
        margin: 20,
        color: '#333'
    },
    sortText: {
        fontSize: isTallDevice ? 30 : 15,
        color: '#333'
    },
    sort: {
        width: '100%',
        flexDirection: 'row-reverse',
        marginBottom: 10
    },
    sort1: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#78B961',
        marginRight: 20,
        width: isTallDevice ? 200 : 65,
        justifyContent: 'center',
        alignItems: 'center',
        height: isTallDevice ? 50 : 25,
        borderRadius: 25,
        backgroundColor: '#f5f3d3'
    },
    videosection: {
        width: '90%',
        height: isTallDevice ? 150 : 100,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#78B961',
        marginTop: 15,
        borderRadius: 15,
        backgroundColor: '#FFFDD0',
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3
    },
    iconbox: {
        width: isTallDevice ? 140 : 70,
        height: isTallDevice ? 90 : 50,
        borderRadius: 10,
        backgroundColor: '#78B961',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    font: {
        fontFamily: 'Poppins-Regular',
        fontSize: isTallDevice ? 25 : 12,
        color: '#333'
    },
    watch: {
        width: isTallDevice ? 120 : 70,
        height: isTallDevice ? 40 : 26,
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
    },
    watchGradient: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})