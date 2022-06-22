import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FavoriteStackParamList } from '../types/navTypes';

const FavoriteScreen = ({
	navigation,
}: {
	navigation: NativeStackNavigationProp<
		FavoriteStackParamList,
		'FavPokemonDetail'
	>;
}) => {
	return (
		<View>
			<Text>FavoriteScreen</Text>
			<Button
				title="FavDetail"
				onPress={() => {
					navigation.navigate('FavPokemonDetail');
				}}
			/>
		</View>
	);
};

export default FavoriteScreen;

const styles = StyleSheet.create({});
