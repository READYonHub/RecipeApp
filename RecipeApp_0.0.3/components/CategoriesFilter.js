import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Constant, { categories, colors } from '../screens/Constant' //tombok beimportalasa

const CategoriesFilter = () => {
    return (
        <View>
            <ScrollView horizontal>
                {categories.map((category, index) => {
                    return (
                        //kategóriák kilistázása
                        <View style={styles.categoruesTombokStyle}>
                            <Text>{category.category}</Text>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default CategoriesFilter;

const styles = StyleSheet.create({
    categoruesTombokStyle:{
        backgroundColor: colors.COLOR_PRIMARY,
        marginRight:36,
        borderRadius:8,
        paddingHorizontal:16,
        paddingVertical: 18,
        shadowColor:"#000",
        shadowOffset:{width:0, height:4}
        
    }
})