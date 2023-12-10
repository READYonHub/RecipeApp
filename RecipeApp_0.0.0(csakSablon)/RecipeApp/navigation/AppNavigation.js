import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, reactNativeStackNavigation } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen.js';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name='Welcome' component={WelcomeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;

const styles = StyleSheet.create({})