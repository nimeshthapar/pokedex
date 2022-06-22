import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { backgroundColors } from '../constants/Colors';
import DetailScreen from '../screens/DetailScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import HomeScreen from '../screens/HomeScreen';
import {
	FavoriteStackParamList,
	HomeStackParamList,
	RootTabParamList,
} from '../types/navTypes';

export default function Navigation() {
	return (
		<NavigationContainer>
			<BottomTabNavigator />
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

const FavoriteStack = createNativeStackNavigator<FavoriteStackParamList>();

const FavStack = () => {
	return (
		<FavoriteStack.Navigator initialRouteName="Favorites">
			<FavoriteStack.Screen name="Favorites" component={FavoriteScreen} />
			<FavoriteStack.Screen
				name="FavPokemonDetail"
				component={DetailScreen}
				options={{ headerShown: false }}
			/>
		</FavoriteStack.Navigator>
	);
};

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
	return (
		<BottomTab.Navigator
			initialRouteName="Home"
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					let iconSize;
					if (route.name === 'Home') {
						iconName = focused ? 'ios-home' : 'ios-home-outline';
						iconSize = focused ? 25 : 20;
					} else if (route.name === 'Favorite') {
						iconName = focused ? 'ios-heart' : 'ios-heart-outline';
						iconSize = focused ? 25 : 20;
					}

					return (
						<Ionicons
							name={iconName}
							size={iconSize}
							color={color}
						/>
					);
				},
				tabBarActiveTintColor: 'red',
				tabBarInactiveTintColor: 'gray',
				headerShown: false,
				tabBarLabelStyle: { fontFamily: 'sf-pro-bold', fontSize: 12 },
			})}
		>
			<BottomTab.Screen name="Home" component={HomeStack} />
			<BottomTab.Screen name="Favorite" component={FavStack} />
		</BottomTab.Navigator>
	);
}
