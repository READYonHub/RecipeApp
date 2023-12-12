import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { categories, colors } from '../screens/Constant'
const CategoriesFilter = () => {
    const categoriesListazasStyle = {
    }
    return (
        <View>
            {/* horizontalis legyen a menu es  */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                {categories.map((category, index) => {
                    return (
                        //ketto stilus van hozzaadva, az egyik lokalisan, a masik meghivva
                        <View style={[styles.categoriesListazasStyle, { backgroundColor: index == 0 ? colors.COLOR_PRIMARY : colors.COLOR_LIGHT }]} >

                            <Text style={[styles.categoriesTextStyle, { color: index === 0 && colors.COLOR_LIGHT }]}>{category.category}</Text>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default CategoriesFilter

const styles = StyleSheet.create({
    categoriesListazasStyle: {
        marginRight: 36,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 18,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
        marginVertical: 16
    },
    categoriesTextStyle: {
        fontSize: 18,
        textTransform: "capitalize",
    }
})