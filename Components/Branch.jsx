import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { globalStyles } from './global_styles'

const Branch = () => {
    return (
        <>
            <View style={globalStyles.bgGround}>
                {/* wrapping everything inside scrollview */}
                <ScrollView>
                    {/* heading text */}
                    <View style={{justifyContent: 'center', alignItems: 'center', height: 60}}>
                        <Text style={styles.headingtext}>Please Select Your Branch</Text>
                    </View>
                    {/* all branch is set inside a view container */}
                    <View style={styles.branchNameContainer}>
                        {/* each branch mini container */}
                        <TouchableOpacity style={styles.branchNameMiniContainer}>
                            <Text>CSE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.branchNameMiniContainer, {marginLeft: 20}]}>
                            <Text>CSSE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.branchNameMiniContainer}>
                            <Text>CSCE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.branchNameMiniContainer, {marginLeft: 20}]}>
                            <Text>IT</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.branchNameMiniContainer}>
                            <Text>ETC</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.branchNameMiniContainer, {marginLeft: 20}]}>
                            <Text>EE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.branchNameMiniContainer}>
                            <Text>ME</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.branchNameMiniContainer, {marginLeft: 20}]}>
                            <Text>CIVIL</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

export default Branch

const styles = StyleSheet.create({
    headingtext: {
        fontSize: 22,
        fontWeight: 900,
    },
    branchNameContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 25
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