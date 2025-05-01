import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import themeContext from '../context/themeContext'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'
import { globalStyles } from './global_styles'

const { width, height } = Dimensions.get('window')
const isTallDevice = width >= 800

const Profile = () => {
  const context = useContext(themeContext)
  const { dark } = context

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#f5f3d3'
    },
    internalContainer: {
      width: "93%",
      height: '95%',
      borderRadius: 20,
      backgroundColor: '#f5f3d3',
      marginTop: 15,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3
    },
    headerGradient: {
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      height: '20%',
      width: '100%'
    },
    profileIcon: {
      backgroundColor: '#f5f3d3',
      width: isTallDevice ? 200 : 120,
      height: isTallDevice ? 200 : 120,
      borderWidth: 4,
      borderColor: '#f5f3d3',
      marginTop: -60,
      borderRadius: 100,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 6,
      justifyContent: 'center',
      alignItems: 'center'
    },
    nameText: {
      fontFamily: 'ComicNeue-Bold',
      color: '#333',
      fontSize: isTallDevice ? 36 : 24,
      marginTop: 15,
      letterSpacing: 1,
      fontWeight: 'bold'
    },
    planBadge: {
      borderRadius: 15,
      height: isTallDevice ? 35 : 25,
      paddingHorizontal: 15,
      marginTop: 10,
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden'
    },
    planText: {
      color: '#333',
      fontSize: isTallDevice ? 18 : 13,
      fontFamily: 'ComicNeue-Bold'
    },
    infoCard: {
      backgroundColor: '#F9F9F9',
      width: '90%',
      marginTop: 25,
      borderRadius: 15,
      overflow: 'hidden',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 2
    },
    infoRow: {
      flexDirection: 'row',
      padding: 15,
      borderBottomColor: '#EEE',
      borderBottomWidth: 1
    },
    infoLabel: {
      fontSize: isTallDevice ? 20 : 14,
      fontFamily: 'ComicNeue-Regular',
      color: '#777'
    },
    infoValue: {
      fontSize: isTallDevice ? 20 : 14,
      fontFamily: 'ComicNeue-Bold',
      color: '#333',
      fontWeight: 'bold'
    }
  })

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f5f3d3' }}>
      <View style={styles.container}>
        <View style={styles.internalContainer}>
          <LinearGradient
            colors={['#FFFDD0', '#78B961']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.headerGradient}>
          </LinearGradient>

          <View style={styles.profileIcon}>
            <Icon name="user" size={isTallDevice ? 100 : 60} color="#78B961" />
          </View>

          <Text style={styles.nameText}>Priyam Kumar</Text>

          <LinearGradient
            colors={['#FFFDD0', '#78B961']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.planBadge}>
            <Text style={styles.planText}>Free Plan</Text>
          </LinearGradient>

          <View style={styles.infoCard}>
            <View style={styles.infoRow}>
              <Icon style={{ marginRight: 15 }} name="id-card" size={isTallDevice ? 24 : 18} color="#78B961" />
              <View>
                <Text style={styles.infoLabel}>Roll Number</Text>
                <Text style={styles.infoValue}>23051690</Text>
              </View>
            </View>

            <View style={styles.infoRow}>
              <Icon style={{ marginRight: 15 }} name="envelope" size={isTallDevice ? 24 : 18} color="#78B961" />
              <View>
                <Text style={styles.infoLabel}>Email Address</Text>
                <Text style={styles.infoValue}>23051690@kiit.ac.in</Text>
              </View>
            </View>

            <View style={styles.infoRow}>
              <Icon style={{ marginRight: 15 }} name="book" size={isTallDevice ? 24 : 18} color="#78B961" />
              <View>
                <Text style={styles.infoLabel}>Branch</Text>
                <Text style={styles.infoValue}>Computer Science</Text>
              </View>
            </View>

            <View style={styles.infoRow}>
              <Icon style={{ marginRight: 15 }} name="graduation-cap" size={isTallDevice ? 24 : 18} color="#78B961" />
              <View>
                <Text style={styles.infoLabel}>Year & Semester</Text>
                <Text style={styles.infoValue}>Year 2, Semester 2</Text>
              </View>
            </View>

            <View style={styles.infoRow} borderBottomWidth={0}>
              <Icon style={{ marginRight: 15 }} name="calendar" size={isTallDevice ? 24 : 18} color="#78B961" />
              <View>
                <Text style={styles.infoLabel}>Joined</Text>
                <Text style={styles.infoValue}>29 days ago</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Profile