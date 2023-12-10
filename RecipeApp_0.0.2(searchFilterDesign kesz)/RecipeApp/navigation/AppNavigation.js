import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, reactNativeStackNavigation } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen.js';
import RecipeListScreen from '../screens/RecipeListScreen.js';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Welcome' component={WelcomeScreen} />
                {/* a RecipeList a valtozo, amit majd meghivunk ugy nevezett route name
                    a component={RecipeListScreen} pedig a render screen,ami
                    a fajl nevet adja vissza es ugy keresi az eleresi utjat
                */}
                <Stack.Screen name='RecipeList' component={RecipeListScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;

const styles = StyleSheet.create({})