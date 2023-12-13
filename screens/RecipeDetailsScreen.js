import React from "react";
import { StyleSheet, View, Text, Image, SafeAreaView, Pressable } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import Constants from "expo-constants";

const RecipeDetailsScreen = ({ navigation, route }) => {

    {/* receptekre ertekeinek tarolasa az tem-be */ }
    const { item } = route.params;
    {/* receptekre kattinva logolas */ }
    //console.log(item);
    return (
        <View style={[styles.screen, { backgroundColor: item.color }]}>
            <SafeAreaView style={styles.ikonokStyle}>
                <Pressable style={{ flex: 1, position: "relative" }} >
                    <FontAwesome name={"arrow-circle-left"} size={40} color={"white"} style={styles.arrowBackStyle} onPress={() => navigation.goBack()} />
                </Pressable>
                <FontAwesome name={"heart-o"} size={34} color={"white"} style={styles.heartStyle} />
            </SafeAreaView>
            <View style={styles.container}>
                <View style={styles.imageStyle}>
                    <Image source={item.image}
                        style={styles.RecipeImageStyle} />
                </View>
                <View>
                    {/* Aktualis recept nev */}
                    <Text style={styles.recipeNameStyle}>{item.name}</Text>
                    {/* aktualis recept leiras */}
                    <Text style={styles.recipeDescriptionStyle}>{item.description}</Text>
                    {/* recept extra leiras */}
                    <View style={styles.recipeExtraDescriptionStyle}>
                        <View style={styles.recipeCardsStyle}>
                            <Text style={styles.recipeCardsIconStyle}></Text>
                            <Text style={styles.recipeCardTextStyle}>{item.time}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default RecipeDetailsScreen;

const styles = StyleSheet.create({
    screen: {
        backgroundColor: "#6f4e37",
        flex: 1,//ha nincs, akkor a statusbart szinezi csak
        paddingTop: Constants.statusBarHeight,//ez van SafeAreaView helyett
    },
    container: {
        backgroundColor: "#fff",
        flex: 1,
        marginTop: 240,
        borderTopLeftRadius: 56, //fehér screen
        borderTopRightRadius: 56, //fehér screen
        alignItems: "center",
        paddingHorizontal: 16,
    },
    imageStyle: {
        //backgroundColor: "red", //kep helyenek a poziciója
        width: 300,
        height: 300,
        position: "absolute",
        marginTop: -150,
    },
    RecipeImageStyle: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"//kep helyehez igazitas
    },
    arrowBackStyle: {
        marginTop: 16,
        flex: 2
    },
    ikonokStyle: {
        flexDirection: "row",
        marginHorizontal: 16,
    },
    heartStyle: {
        marginRight: 8,
        marginTop: 16,
    },
    recipeNameStyle: {
        marginTop: 160,
        fontSize: 28,
        fontWeight: "bold",
    },
    recipeDescriptionStyle: {
        fontSize: 16,
        marginVertical: 16,
        marginHorizontal: -112,
    },
    recipeExtraDescriptionStyle: {
        flexDirection: "row",
    },
    recipeCardsStyle: {
        backgroundColor: "orange",
        paddingHorizontal: 26,
        paddingVertical: 26,
        borderRadius: 8,
        alignItems: "center",
    },
    recipeCardsIconStyle: {
        fontSize: 40,
    },
    recipeCardTextStyle: {
        fontSize: 20,
        fontWeight: 400,
    }
})