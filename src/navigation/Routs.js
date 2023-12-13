import { StyleSheet, Text, View,useColorScheme } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer,DarkTheme, DefaultTheme, } from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ScrollAbleApiData from '../screens/ScrollAbleApiData';
export default function Routs({ navigation }) {
   
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName='SplashScreen'>
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ScrollAbleApiData" component={ScrollAbleApiData} options={{ headerShown: false }} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
   
})