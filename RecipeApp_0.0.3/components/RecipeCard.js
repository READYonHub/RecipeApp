import { FlatList, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { colors, recipeList } from '../screens/Constant'
import { Dimensions } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

const RecipeCard = () => {
    return (
        <View style={styles.container}>
            {/* hasznalja a recep listakat az item valtozoval es kilistazza a nevet
        a {item.name}-val
    */}
            <FlatList data={recipeList} renderItem={({ item }) => (
                <Pressable onPress={() => alert("ji")}
                 style={styles.recipeListStyle}>
                    {/* receptek kepei */}
                    <Image source={item.image}
                        style={styles.recipesImageStyle} />

                    {/* receptek neve */}
                    <Text>{item.name}</Text>
                    
                    <View style={styles.recipeRaintgTimeStyle}>
                        {/* idoigeny kiirasa */}
                        <Text>{item.time}</Text>
                        <View>
                            <Text> | </Text>
                        </View>
                        <View style={styles.recipeRaintgTimeStyle}>
                            {/* ertekeles kiirasa */}
                            <Text style={styles.raintTextStyle}>{item.rating}</Text>
                            <FontAwesome name="star"
                                size={16}
                                color={colors.COLOR_PRIMARY} />
                        </View>
                    </View>
                </Pressable>
            )}
                //2 oszloop
                numColumns={2}
                //szokoz a kartyak kozott
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                showsVerticalScrollIndicator={false}//eltunteti a jobb oldali gorgetovonalat
            />
        </View>
    )
}

export default RecipeCard

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        height: height * 0.5//hogy a vegeig le lehessen gorgetni a receptek kozott
    },
    recipeListStyle: {
        backgroundColor: colors.COLOR_LIGHT,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
        borderRadius: 16,
        marginVertical: 16,
        alignItems: "center",
        paddingHorizontal: 8,
        paddingVertical: 26,
    },
    recipesImageStyle: {
        width: width * 0.4,
        height: height * 0.15,
        resizeMode: "cover"
    },
    recipeRaintgTimeStyle: {
        flexDirection: "row", // Ez fogja vízszintesen elrendezni az elemeket
        justifyContent: 'center', // Vízszintes középre igazítás
        marginTop: 8,
        alignItems: 'center',
    },
    raintTextStyle: {
        marginRight: 4,
        alignSelf: 'center', // Középre igazítás a saját tengelyén
    }

})