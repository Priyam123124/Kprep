import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { globalStyles } from './global_styles'

const Scheme = () => {
    return (
        <>
            <View style={globalStyles.bgGround}>
                {/* everything is wrapped inside a scrollview */}
                <ScrollView>
                    {/* Flow of the notes visibility eg:- CSE->1ST Year->Scheme A->Notes */}
                    <View>
                        <Text>CSE</Text>
                    </View>
                    {/* heading text */}
                    <View style={{ justifyContent: 'center', alignItems: 'center', height: 60 }}>
                        <Text style={styles.headingtext}>Please Select Your Scheme</Text>
                    </View>
                    {/* all the schemas are set inside a view container. this container centers all the elements */}
                    <View style={{ width: "100%", height: 450, justifyContent: 'center', alignItems: 'center' }}>
                        {/* Schemas */}
                        <TouchableOpacity style={styles.branchNameMiniContainer}>
                            <Text>Scheme A</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.branchNameMiniContainer, {marginTop: 20}]}>
                            <Text>Scheme B</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

export default Scheme

const styles = StyleSheet.create({
    headingtext: {
        fontSize: 22,
        fontWeight: 900,
    },
    branchNameMiniContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.2,
        borderColor: 'black',
        borderStyle: 'solid',
        width: 270,
        height: 70,
        borderRadius: 10,
        // marginTop: 30
    }
})