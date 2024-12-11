import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { globalStyles } from './global_styles'

const Subject = () => {
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
                        <Text style={styles.headingtext}>Please Select Your Subject</Text>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

export default Subject

const styles = StyleSheet.create({
    headingtext: {
        fontSize: 22,
        fontWeight: 900,
    },
})