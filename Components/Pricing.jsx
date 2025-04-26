import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import BouncyCheckbox from "react-native-bouncy-checkbox"

const Pricing = () => {
    const { width, height } = Dimensions.get('window')
    const isTallDevice = width >= 800

    const styles = StyleSheet.create({
        label: {
            alignItems: 'center'
        },
        text: {
            fontFamily: 'Poppins-Bold',
            fontSize: isTallDevice ? 50 : 22
        },
        text2: {
            fontFamily: 'Sansation-Regular',
            fontSize: isTallDevice ? 25 : 11
        },
        buttoncontainer: {
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            marginTop: 30
        },
        planbutton: {
            fontFamily: 'ComicNeue-Regular',
            fontSize: isTallDevice ? 25 : 15
        },
        button: {
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: 'black',
            width: isTallDevice ? 200 : 80,
            alignItems: 'center',
            justifyContent: 'center',
            height: isTallDevice ? 50 : 23,
            borderRadius: 50,
            marginLeft: 15
        },
        plan: {
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
            marginTop: 20
        },
    })
    return (
        <>
            <View style={styles.label}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={[{ color: '#86BF74' }, styles.text]}>Premium qulity</Text>
                    <Text style={[{ marginLeft: 4 }, styles.text]}>without</Text>
                </View>
                <Text style={styles.text}>the premium price</Text>
                <Text style={styles.text2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</Text>
                <Text style={styles.text2}>sed do eiusmod tempor Lorem ipsum dolor sit amet,</Text>
                <Text style={styles.text2}>consectetur adipisc</Text>
            </View>

            <View style={styles.buttoncontainer}>
                <View style={styles.button}>
                    <Text style={styles.planbutton}>MID-SEM</Text>
                </View>

                <View style={styles.button}>
                    <Text style={styles.planbutton}>MID-SEM</Text>
                </View>

                <View style={styles.button}>
                    <Text style={styles.planbutton}>MID-SEM</Text>
                </View>
            </View>

            <View style={styles.plan}>
                <LinearGradient
                    colors={['#B8E2A1', '#C5EBB0', '#D2F4BF', '#C5EBB0', '#779D62']}
                    locations={[0.1517, 0.2017, 0.5367, 0.75, 1.0]}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    style={{ width: '45%', borderRadius: 20 }}
                >
                    <Text style={{ margin: 20, marginBottom: 0, fontSize: isTallDevice ? 30 : 15, fontFamily: 'ComicNeue-Bold' }}>Free Plan</Text>
                    <Text style={{ marginLeft: 20, fontSize: isTallDevice ? 60 : 30, fontFamily: 'Comfortaa-Bold', color: '#76C34D' }}>₹0</Text>
                    <BouncyCheckbox
                        size={isTallDevice ? 30 : 20}
                        fillColor="black"
                        unFillColor="#FFFFFF"
                        text="Feature 1"
                        iconStyle={{ borderColor: "black", marginLeft: 20, marginTop: 10 }}
                        innerIconStyle={{ borderWidth: 2 }}
                        textStyle={{ fontFamily: "ComicNeue-Bold", color: 'black', fontSize: isTallDevice ? 25 : 15, marginTop: 10 }}
                    />

                    <BouncyCheckbox
                        size={isTallDevice ? 30 : 20}
                        fillColor="black"
                        unFillColor="#FFFFFF"
                        text="Feature 1"
                        iconStyle={{ borderColor: "black", marginLeft: 20, marginTop: 10 }}
                        innerIconStyle={{ borderWidth: 2 }}
                        textStyle={{ fontFamily: "ComicNeue-Bold", color: 'black', fontSize: isTallDevice ? 25 : 15, marginTop: 10 }}
                    />

                    <BouncyCheckbox
                        size={isTallDevice ? 30 : 20}
                        fillColor="black"
                        unFillColor="#FFFFFF"
                        text="Feature 1"
                        iconStyle={{ borderColor: "black", marginLeft: 20, marginTop: 10 }}
                        innerIconStyle={{ borderWidth: 2 }}
                        textStyle={{ fontFamily: "ComicNeue-Bold", color: 'black', fontSize: isTallDevice ? 25 : 15, marginTop: 10 }}
                    />

                    <BouncyCheckbox
                        size={isTallDevice ? 30 : 20}
                        fillColor="black"
                        unFillColor="#FFFFFF"
                        text="Feature 1"
                        iconStyle={{ borderColor: "black", marginLeft: 20, marginTop: 10 }}
                        innerIconStyle={{ borderWidth: 2 }}
                        textStyle={{ fontFamily: "ComicNeue-Bold", color: 'black', fontSize: isTallDevice ? 25 : 15, marginTop: 10 }}
                    />

                    <BouncyCheckbox
                        size={isTallDevice ? 30 : 20}
                        fillColor="black"
                        unFillColor="#FFFFFF"
                        text="Feature 1"
                        iconStyle={{ borderColor: "black", marginLeft: 20, marginTop: 10, marginBottom: 20 }}
                        innerIconStyle={{ borderWidth: 2 }}
                        textStyle={{ fontFamily: "ComicNeue-Bold", color: 'black', fontSize: isTallDevice ? 25 : 15, marginTop: 10, marginBottom: 20 }}
                    />
                </LinearGradient>

                <LinearGradient
                    colors={['#B8E2A1', '#C5EBB0', '#D2F4BF', '#C5EBB0', '#779D62']}
                    locations={[0.1517, 0.2017, 0.5367, 0.75, 1.0]}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    style={{ width: '45%', borderRadius: 20, marginLeft: 10 }}
                >
                    <Text style={{ margin: 20, marginBottom: 0, fontSize: isTallDevice ? 30 : 15, fontFamily: 'ComicNeue-Bold' }}>Free Plan</Text>
                    <Text style={{ marginLeft: 20, fontSize: isTallDevice ? 60 : 30, fontFamily: 'Comfortaa-Bold', color: '#76C34D' }}>₹0</Text>
                    <BouncyCheckbox
                        size={isTallDevice ? 30 : 20}
                        fillColor="black"
                        unFillColor="#FFFFFF"
                        text="Feature 1"
                        iconStyle={{ borderColor: "black", marginLeft: 20, marginTop: 10 }}
                        innerIconStyle={{ borderWidth: 2 }}
                        textStyle={{ fontFamily: "ComicNeue-Bold", color: 'black', fontSize: isTallDevice ? 25 : 15, marginTop: 10 }}
                    />

                    <BouncyCheckbox
                        size={isTallDevice ? 30 : 20}
                        fillColor="black"
                        unFillColor="#FFFFFF"
                        text="Feature 1"
                        iconStyle={{ borderColor: "black", marginLeft: 20, marginTop: 10 }}
                        innerIconStyle={{ borderWidth: 2 }}
                        textStyle={{ fontFamily: "ComicNeue-Bold", color: 'black', fontSize: isTallDevice ? 25 : 15, marginTop: 10 }}
                    />

                    <BouncyCheckbox
                        size={isTallDevice ? 30 : 20}
                        fillColor="black"
                        unFillColor="#FFFFFF"
                        text="Feature 1"
                        iconStyle={{ borderColor: "black", marginLeft: 20, marginTop: 10 }}
                        innerIconStyle={{ borderWidth: 2 }}
                        textStyle={{ fontFamily: "ComicNeue-Bold", color: 'black', fontSize: isTallDevice ? 25 : 15, marginTop: 10 }}
                    />

                    <BouncyCheckbox
                        size={isTallDevice ? 30 : 20}
                        fillColor="black"
                        unFillColor="#FFFFFF"
                        text="Feature 1"
                        iconStyle={{ borderColor: "black", marginLeft: 20, marginTop: 10 }}
                        innerIconStyle={{ borderWidth: 2 }}
                        textStyle={{ fontFamily: "ComicNeue-Bold", color: 'black', fontSize: isTallDevice ? 25 : 15, marginTop: 10 }}
                    />

                    <BouncyCheckbox
                        size={isTallDevice ? 30 : 20}
                        fillColor="black"
                        unFillColor="#FFFFFF"
                        text="Feature 1"
                        iconStyle={{ borderColor: "black", marginLeft: 20, marginTop: 10, marginBottom: 20 }}
                        innerIconStyle={{ borderWidth: 2 }}
                        textStyle={{ fontFamily: "ComicNeue-Bold", color: 'black', fontSize: isTallDevice ? 25 : 15, marginTop: 10, marginBottom: 20 }}
                    />
                </LinearGradient>
            </View>
            <View style={{ alignItems: 'flex-end', width: '100%' }}>
                <TouchableOpacity style={{ backgroundColor: '#587C4D', width: isTallDevice?200:120, alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginRight: isTallDevice?40:20, marginTop: 10, height: isTallDevice?50:30 }}><Text style={{ fontFamily: 'Sansation_Regular', color: 'white', fontSize: isTallDevice?25:15}}>GET STARTED</Text></TouchableOpacity>
            </View>
        </>
    )
}

export default Pricing

