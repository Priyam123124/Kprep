import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import BouncyCheckbox from "react-native-bouncy-checkbox"
import Icon from 'react-native-vector-icons/FontAwesome'
import { globalStyles } from './global_styles'

const Pricing = () => {
    const { width, height } = Dimensions.get('window')
    const isTallDevice = width >= 800
    const [selectedPlan, setSelectedPlan] = useState('mid-sem')

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#f5f3d3',
            padding: 20
        },
        headerContainer: {
            alignItems: 'center',
            marginBottom: 30
        },
        headerTitle: {
            fontFamily: 'Poppins-Bold',
            fontSize: isTallDevice ? 38 : 24,
            color: '#333',
            textAlign: 'center'
        },
        headerHighlight: {
            color: '#78B961'
        },
        headerSubtitle: {
            fontFamily: 'ComicNeue-Regular',
            fontSize: isTallDevice ? 20 : 14,
            color: '#555',
            textAlign: 'center',
            marginTop: 10,
            lineHeight: isTallDevice ? 28 : 20
        },
        tabContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 25,
            backgroundColor: '#F5F5F5',
            borderRadius: 30,
            padding: 5,
            alignSelf: 'center'
        },
        tabButton: {
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 25,
            minWidth: isTallDevice ? 160 : 100
        },
        tabButtonActive: {
            overflow: 'hidden'
        },
        tabButtonText: {
            fontFamily: 'ComicNeue-Bold',
            fontSize: isTallDevice ? 18 : 15,
            textAlign: 'center',
            color: '#777'
        },
        tabButtonTextActive: {
            color: '#333',
            fontWeight: 'bold'
        },
        plansContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20
        },
        planCard: {
            width: '48%',
            borderRadius: 20,
            overflow: 'hidden',
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 5
        },
        planContent: {
            padding: 20,
            paddingBottom: 25
        },
        planTitle: {
            fontFamily: 'ComicNeue-Bold',
            fontSize: isTallDevice ? 26 : 18,
            color: '#333',
            marginBottom: 5,
            fontWeight: 'bold'
        },
        planPrice: {
            fontFamily: 'Comfortaa-Bold',
            fontSize: isTallDevice ? 50 : 30,
            color: '#333',
            marginBottom: 15
        },
        featureItem: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10
        },
        featureText: {
            fontFamily: 'ComicNeue-Regular',
            fontSize: isTallDevice ? 18 : 14,
            color: '#444',
            marginLeft: 10
        },
        actionButton: {
            alignSelf: 'flex-end',
            width: isTallDevice ? 200 : 150,
            height: isTallDevice ? 50 : 40,
            borderRadius: 25,
            overflow: 'hidden',
            marginTop: 20,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 5
        },
        buttonGradient: {
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row'
        },
        buttonText: {
            fontFamily: 'ComicNeue-Bold',
            color: '#333',
            fontSize: isTallDevice ? 18 : 14,
            marginLeft: 8
        }
    })

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>
                    <Text style={styles.headerHighlight}>Premium quality</Text> without
                </Text>
                <Text style={styles.headerTitle}>the premium price</Text>
                <Text style={styles.headerSubtitle}>
                    Choose the perfect plan that fits your educational needs,
                    with features designed to enhance your learning experience.
                </Text>
            </View>

            <View style={styles.tabContainer}>
                {['mid-sem', 'end-sem', 'yearly'].map((plan) => (
                    <TouchableOpacity
                        key={plan}
                        style={[
                            styles.tabButton,
                            selectedPlan === plan && styles.tabButtonActive
                        ]}
                        onPress={() => setSelectedPlan(plan)}
                    >
                        {selectedPlan === plan ? (
                            <LinearGradient
                                colors={['#FFFDD0', '#78B961']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: 25,
                                    justifyContent: 'center'
                                }}
                            >
                                <Text style={[styles.tabButtonText, styles.tabButtonTextActive]}>
                                    {plan.toUpperCase()}
                                </Text>
                            </LinearGradient>
                        ) : (
                            <Text style={styles.tabButtonText}>
                                {plan.toUpperCase()}
                            </Text>
                        )}
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.plansContainer}>
                {/* Free Plan */}
                <View style={styles.planCard}>
                    <LinearGradient
                        colors={['#FFFDD0', '#78B961']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        style={styles.planContent}
                    >
                        <Text style={styles.planTitle}>Free Plan</Text>
                        <Text style={styles.planPrice}>₹0</Text>

                        {['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'].map((feature, index) => (
                            <View key={index} style={styles.featureItem}>
                                <Icon name="check-circle" size={isTallDevice ? 20 : 16} color="#333" />
                                <Text style={styles.featureText}>{feature}</Text>
                            </View>
                        ))}
                    </LinearGradient>
                </View>

                {/* Premium Plan */}
                <View style={styles.planCard}>
                    <LinearGradient
                        colors={['#FFFDD0', '#78B961']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        style={styles.planContent}
                    >
                        <Text style={styles.planTitle}>Premium Plan</Text>
                        <Text style={styles.planPrice}>₹299</Text>

                        {['Premium Feature 1', 'Premium Feature 2', 'Premium Feature 3', 'Premium Feature 4', 'Premium Feature 5'].map((feature, index) => (
                            <View key={index} style={styles.featureItem}>
                                <Icon name="check-circle" size={isTallDevice ? 20 : 16} color="#333" />
                                <Text style={styles.featureText}>{feature}</Text>
                            </View>
                        ))}
                    </LinearGradient>
                </View>
            </View>

            <TouchableOpacity style={styles.actionButton}>
                <LinearGradient
                    colors={['#3a7bd5', '#446377']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.buttonGradient}
                >
                    <Icon name="arrow-right" size={isTallDevice ? 18 : 14} color="#FFF" />
                    <Text style={[styles.buttonText, { color: '#FFF' }]}>GET STARTED</Text>
                </LinearGradient>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default Pricing

