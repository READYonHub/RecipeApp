import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'


//ketto props
const SearchFilter = ({ icon, placehorder }) => {
    return (
        <View style={styles.container}>
            {/* icon formazas amit atadunk props-ban */}
            <FontAwesome name={icon} size={20} color="#f96163" />
            {/* textInput ahol majd kereshetunk */}
            <TextInput style={styles.placehorderStyle} placeholder={placehorder} />
        </View>
    )
}

export default SearchFilter

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flexDirection: "row",
        paddingVertical: 16,
        borderRadius: 8,
        paddingHorizontal: 16,
        marginVertical: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
    },
    placehorderStyle: {
        paddingLeft: 8,
        fontSize: 16,
        color: "grey"
    }

})