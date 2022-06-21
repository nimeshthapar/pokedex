import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../types/navTypes';

type props = NativeStackNavigationProp<HomeStackParamList, 'Pokedex'>;
const HomeScreen = ({ navigation }: props) => {
	return (
		<View>
			<Text>HomeScreen</Text>
			<Button
				onPress={() => {
					navigation.navigate('PokemonDetail');
				}}
				title="Go to DEtail"
			/>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
