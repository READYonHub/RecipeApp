import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';

const WelcomeScreen = ({navigation}) => {
    
    return (
        <View style={styles.WelcomeScreenContainer}>
            <View>
                <Image
                    //kep helye
                    source={require('../assets/Images/welcome.png')}
                    style={styles.imageStyle}
                />
            </View>
            {/* Receptek szama itt jelenik meg */}
            <Text style={styles.recipeTextStyle}>Receptek szama (pl.:10K Premium Recipes)</Text>

            {/* Cook Like A Chef */}
            <Text style={styles.CookLikeAChef}>Cook Like A Chef</Text>

            <TouchableOpacity style={styles.TouchableOpacityStyle}
            /*kattintasra at lep a RecipeList-re amit a AppNavigation.js ben adtunk meg
             <Stack.Screen name='RecipeList' component={RecipeListScreen}/>
             itt a RecipeList a valtozo a component={RecipeListScreen} pedig a navigator
             mind ehhez szuksegnk volt meg a 
             const WelcomeScreen = ({navigation}) => {
             hogy ezt beirjuk felulre
             */
            onPress={() => navigation.navigate('RecipeList')}>
                <Text style={styles.LetsGoTextStyle}>Let's Go</Text>
            </TouchableOpacity>
        </View>
    );
};

export default WelcomeScreen;

/*a Dimensions API-t használja a készülék képernyőméretének lekérdezésére.
A Dimensions.get('window') kifejezés visszaadja a készülék ablakának
 (képernyőjének) méreteit a width és height tulajdonságokon keresztül.*/
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    WelcomeScreenContainer: {
        flex: 1,
        alignItems: 'center', // középre igazítja a képet
    },
    imageStyle: {
        width: width * 1,
        height: height * 0.5
    },
    recipeTextStyle: {
        color: '#f96163', // színezi a recept szám szöveget
        fontSize: width * 0.035, // a kepernyohoz (szeleseghez) viszonyitva allitok be meretet
        fontWeight: 'bold',
    },
    CookLikeAChef: {
        fontSize: width * 0.1,
        fontWeight: 'bold',
        color: '#3C444C',
        marginTop: 34,
        marginBottom: 40,
    },
    TouchableOpacityStyle: {
        backgroundColor: '#F96163',
        borderRadius: 19,
        paddingVertical: 18,
        width: '80%',
        alignItems: 'center'
    },
    LetsGoTextStyle: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '700'
    }
});
