import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import DetailScreen from '../screens/DetailScreen';
import HomeScreen from '../screens/HomeScreen';
import { HomeStackParamList } from '../types/navTypes';

export default function Navigation() {
	return (
		<NavigationContainer>
			<HomeStack />
		</NavigationContainer>
	);
}

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
	return (
		<Stack.Navigator initialRouteName="Pokedex">
			<Stack.Screen
				name="Pokedex"
				component={HomeScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="PokemonDetail"
				component={DetailScreen}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};
