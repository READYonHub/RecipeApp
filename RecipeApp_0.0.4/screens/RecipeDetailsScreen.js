import React from "react";
import { StyleSheet, View, Text, Image, SafeAreaView, Pressable } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import Constants from "expo-constants";

const RecipeDetailsScreen = ({ navigation, route }) => {
    {/* receptekre kattinva logolas */ }
    const { item } = route.params;
    console.log(item);
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
        marginTop: 240,
        borderTopLeftRadius: 56, //fehér screen
        borderTopRightRadius: 56, //fehér screen
        flex: 1,
        alignItems: "center",
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
    }
})