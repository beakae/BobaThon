import React, { useEffect, Text } from 'react';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Drinks, Profile, Login, Signup, Drink, Deals } from './screens';
import { MenuProvider } from 'react-native-popup-menu';
import { UserProvider } from './contexts/UserProvider';

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    Font.loadAsync({
      'Chewy-Regular': require('./assets/fonts/Chewy-Regular.ttf'),
    });
  }, []);

  return (
    <UserProvider>
      <MenuProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Deals">
            <Stack.Screen name="Drinks" component={ Drinks } options={{ headerShown: false }}/>
            <Stack.Screen name="Profile" component={ Profile } options={{ headerShown: false }}/>
            <Stack.Screen name="Login" component={ Login } options={{ headerShown: false }}/>
            <Stack.Screen name="Signup" component={ Signup } options={{ headerShown: false }}/>
            <Stack.Screen name="Drink" component={ Drink } options={{ headerShown: false }}/>
            <Stack.Screen name="Deals" component={ Deals } options={{ headerShown: false }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </MenuProvider>
    </UserProvider>
  );
}