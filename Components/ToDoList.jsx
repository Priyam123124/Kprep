import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'

const { width, height } = Dimensions.get('window')
const isTallDevice = width >= 800

const ToDoList = () => {
    return (
        <>
            <ScrollView>
                <LinearGradient
                    colors={['#587C4D', '#7CAF6D', '#587C4D']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.gradient}
                >
                    <View style={styles.todo}>
                        <Text style={{ fontFamily: 'Comfortaa-Regular', fontSize: isTallDevice ? 60 : 30, color: '#FFFEF7' }}>To - Do</Text>
                        <Text style={{ fontFamily: 'Comfortaa-Regular', fontSize: isTallDevice ? 60 : 30, color: '#FFFEF7' }}>List</Text>
                    </View>
                </LinearGradient>
                <View style={{ alignItems: 'flex-end' }}>
                    {Array.from({ length: 5 }, (_, i) => (
                        <LinearGradient
                            key={i}
                            colors={['#587C4D', '#94CF74', '#587C4D']}
                            locations={[0, 0.47, 0.975]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.list}
                        >
                            <Icon
                                style={{ marginRight: 10 }}
                                name="star"
                                size={isTallDevice ? 50 : 30}
                                color="gold"
                            />
                            <View style={styles.todotextbox}>
                                <Text style={styles.todotext}>Task {i + 1} xyz</Text>
                                <Text
                                    style={[
                                        styles.todotext,
                                        {
                                            fontFamily: 'ComicNeue-Light',
                                            fontSize: isTallDevice ? 28 : 15,
                                        },
                                    ]}
                                >
                                    XYZ Description
                                </Text>
                            </View>
                        </LinearGradient>
                    ))}

                </View>
            </ScrollView>
        </>
    )
}

export default ToDoList

const styles = StyleSheet.create({
    gradient: {
        width: '100%',
        height: isTallDevice ? 330 : 190,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 50,
        justifyContent: 'center'
    },
    todo: {
        marginLeft: 20
    },
    list: {
        marginTop: 20,
        width: '70%',
        height: isTallDevice ? 90 : 60,
        borderTopLeftRadius: isTallDevice ? 38 : 27,
        borderBottomLeftRadius: isTallDevice ? 38 : 27,
        flexDirection: 'row-reverse',
        alignItems: 'center'
    },
    todotext: {
        fontFamily: 'ComicNeue-Bold',
        color: 'white',
        fontSize: isTallDevice ? 40 : 20,
        letterSpacing: 0.5
    },
    todotextbox: {
        marginRight: isTallDevice ? 230 : 60
    }
})