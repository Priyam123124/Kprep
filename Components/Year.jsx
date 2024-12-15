import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { globalStyles } from './global_styles'

const Year = () => {
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
                        <Text style={styles.headingtext}>Please Select Your Year</Text>
                    </View>
                    {/* all the years are packed inside a view container */}
                    <View style={styles.branchNameContainer}>
                        {/* each year mini container */}
                        <TouchableOpacity style={styles.branchNameMiniContainer}>
                            <Text>1st Year</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.branchNameMiniContainer, { marginLeft: 20 }]}>
                            <Text>2nd Year</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.branchNameContainer}>
                        {/* each year mini container */}
                        <TouchableOpacity style={styles.branchNameMiniContainer}>
                            <Text>3rd Year</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.branchNameMiniContainer, { marginLeft: 20 }]}>
                            <Text>4th Year</Text>
                        </TouchableOpacity>
                    </View>
                        {/*<TouchableOpacity style={styles.branchNameMiniContainer}>
                            <Text>3rd Year</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.branchNameMiniContainer, { marginLeft: 20 }]}>
                            <Text>4th Year</Text>
                        </TouchableOpacity> */}
                </ScrollView>
            </View>
        </>
    )
}

export default Year

const styles = StyleSheet.create({
    headingtext: {
        fontSize: 22,
        fontWeight: 900,
    },
    branchNameContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        // flexWrap: 'wrap',
        marginTop: 5
    },
    branchNameMiniContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.2,
        borderColor: 'black',
        borderStyle: 'solid',
        width: 120,
        height: 80,
        borderRadius: 10,
        marginTop: 30
    }
})