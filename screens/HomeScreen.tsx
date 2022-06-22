import {
	FlatList,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	View,
} from 'react-native';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../types/navTypes';
import SearchHeader from '../components/SearchHeader';
import Pokemon from '../model/PokemonDetail';
import PokemonCard from '../components/PokemonCard';

const pokemons: Pokemon[] = [
	new Pokemon(
		'Bulbasaur',
		'001',
		['grass', 'poison'],
		'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
	),
	new Pokemon(
		'Ivysaur',
		'002',
		['grass', 'poison'],
		'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png'
	),
	new Pokemon(
		'Venusaur',
		'003',
		['grass', 'poison'],
		'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png'
	),
	new Pokemon(
		'Charmander',
		'004',
		['fire'],
		'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'
	),
	new Pokemon(
		'Charmaleon',
		'005',
		['fire'],
		'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png'
	),
	new Pokemon(
		'Charizard',
		'006',
		['fire', 'flying'],
		'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png'
	),
];

type props = NativeStackNavigationProp<HomeStackParamList, 'Pokedex'>;
const HomeScreen = ({ navigation }: { navigation: props }) => {
	return (
		<SafeAreaView style={styles.screen}>
			<SearchHeader />
			<FlatList
				data={pokemons}
				renderItem={({ item }) => (
					<PokemonCard
						pokemon={item}
						onPress={() => {
							navigation.navigate('PokemonDetail', {
								name: item.name,
								id: item.id,
								color: item.types[0],
							});
						}}
					/>
				)}
			/>
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	screen: {
		backgroundColor: '#f5f5f5',
		flex: 1,
		padding: 10,
		marginTop: StatusBar.currentHeight,
	},
});
