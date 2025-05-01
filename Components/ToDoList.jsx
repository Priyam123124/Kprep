import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'
import themeContext from '../context/themeContext'
import { globalStyles } from './global_styles'

const { width, height } = Dimensions.get('window')
const isTallDevice = width >= 800

const ToDoList = () => {
    const context = useContext(themeContext)
    const { dark } = context

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <LinearGradient
                    colors={['#FFFDD0', '#78B961']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.gradient}
                >
                    <View style={styles.todo}>
                        <Text style={styles.headerText}>To-Do List</Text>
                        <Text style={styles.subHeaderText}>Organize your tasks</Text>
                    </View>
                </LinearGradient>
                <View style={styles.listContainer}>
                    {Array.from({ length: 5 }, (_, i) => (
                        <TouchableOpacity key={i} activeOpacity={0.8}>
                            <LinearGradient
                                colors={['#FFFDD0', '#78B961']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 0, y: 1 }}
                                style={styles.list}
                            >
                                <Icon
                                    style={{ marginRight: 15 }}
                                    name="star"
                                    size={isTallDevice ? 30 : 20}
                                    color="#333"
                                />
                                <View style={styles.todotextbox}>
                                    <Text style={styles.todotext}>Task {i + 1}</Text>
                                    <Text style={styles.todoSubtext}>
                                        Task description goes here
                                    </Text>
                                </View>
                                <View style={styles.iconContainer}>
                                    <Icon name="check-circle" size={isTallDevice ? 24 : 18} color="#333" />
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>
                    ))}
                </View>

                <TouchableOpacity style={styles.addButton}>
                    <LinearGradient
                        colors={['#3a7bd5', '#446377']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.addButtonGradient}
                    >
                        <Icon name="plus" size={isTallDevice ? 24 : 16} color="#FFF" />
                        <Text style={styles.addButtonText}>Add New Task</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default ToDoList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f3d3'
    },
    gradient: {
        width: '100%',
        height: isTallDevice ? 220 : 160,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingHorizontal: 20,
        justifyContent: 'center'
    },
    todo: {
        marginLeft: 10
    },
    headerText: {
        fontFamily: 'Comfortaa-Bold',
        fontSize: isTallDevice ? 45 : 28,
        color: '#333',
        fontWeight: 'bold'
    },
    subHeaderText: {
        fontFamily: 'ComicNeue-Regular',
        fontSize: isTallDevice ? 22 : 16,
        color: '#555',
        marginTop: 5
    },
    listContainer: {
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 80
    },
    list: {
        marginVertical: 10,
        width: isTallDevice ? 700 : 350,
        height: isTallDevice ? 90 : 70,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5
    },
    todotext: {
        fontFamily: 'ComicNeue-Bold',
        color: '#333',
        fontSize: isTallDevice ? 24 : 18,
        fontWeight: 'bold'
    },
    todoSubtext: {
        fontFamily: 'ComicNeue-Regular',
        color: '#555',
        fontSize: isTallDevice ? 18 : 14,
        marginTop: 3
    },
    todotextbox: {
        flex: 1
    },
    iconContainer: {
        padding: 5
    },
    addButton: {
        alignSelf: 'center',
        width: isTallDevice ? 200 : 170,
        height: isTallDevice ? 50 : 45,
        borderRadius: 25,
        overflow: 'hidden',
        marginTop: 10,
        marginBottom: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 6
    },
    addButtonGradient: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    addButtonText: {
        fontFamily: 'ComicNeue-Bold',
        color: 'white',
        fontSize: isTallDevice ? 20 : 16,
        marginLeft: 10
    }
})