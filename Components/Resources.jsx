import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { globalStyles } from './global_styles'

const Resources = () => {
    return (
        <>
            <View style={globalStyles.bgGround}>
                {/* wrapped everything inside scrollview */}
                <ScrollView>
                    {/* Flow of the notes visibility eg:- CSE->1ST Year->Scheme A->Notes */}
                    <View>
                        <Text>CSE</Text>
                    </View>
                    {/* Heading Text */}
                    <View style={{ justifyContent: 'center', alignItems: 'center', height: 60 }}>
                        <Text style={styles.headingtext}>Enjoy The Resources</Text>
                    </View>
                    {/* Notes Resources: Components are repeated for now. We will deal it with mapping all the resources. Its a demo right now*/}
                    <View style={{ width: "100%", justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.branchNameMiniContainer}>
                            <Text>Resources</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.branchNameMiniContainer, { marginTop: 20 }]}>
                            <Text>Resources</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.branchNameMiniContainer}>
                            <Text>Resources</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.branchNameMiniContainer}>
                            <Text>Resources</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.branchNameMiniContainer}>
                            <Text>Resources</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.branchNameMiniContainer}>
                            <Text>Resources</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.branchNameMiniContainer}>
                            <Text>Resources</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.branchNameMiniContainer}>
                            <Text>Resources</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

export default Resources

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
        marginTop: 30
    }
})