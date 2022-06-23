import {
	ActivityIndicator,
	FlatList,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	View,
	Text,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../types/navTypes';
import SearchHeader from '../components/SearchHeader';
import Pokemon from '../model/PokemonDetail';
import PokemonCard from '../components/PokemonCard';
import { changeNumtoId, imgUrlSuffix } from '../util/helper';

type props = NativeStackNavigationProp<HomeStackParamList, 'Pokedex'>;

const HomeScreen = ({ navigation }: { navigation: props }) => {
	const [pokemons, setPokemons] = useState<Pokemon[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [offset, setOffset] = useState<number>(0);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);

			const response = await fetch(
				`https://pokeapi.co/api/v2/pokemon?limit=6&offset=${offset}`
			);

			const data = await response.json();

			const loadedPokemons: Pokemon[] = [];

			for (const pokemonData of data.results) {
				const Id = changeNumtoId(+pokemonData.url.split('/')[6]);
				const newPokemon: Pokemon = {
					name:
						pokemonData.name[0].toUpperCase() +
						pokemonData.name.substring(1),
					image: imgUrlSuffix + Id + '.png',
					types: [],
					id: Id,
					stats: [],
					ablities: [],
					height: '',
					weight: '',
				};

				const responsePokemon = await fetch(pokemonData.url);

				const pokemonOverallData = await responsePokemon.json();

				newPokemon.height = pokemonOverallData.height;
				newPokemon.weight = pokemonOverallData.weight;

				for (const abilityObj of pokemonOverallData.abilities) {
					newPokemon.ablities.push(abilityObj.ability.name);
				}

				for (const typeObj of pokemonOverallData.types) {
					newPokemon.types.push(typeObj.type.name);
				}

				for (const statsObj of pokemonOverallData.stats) {
					newPokemon.stats.push({
						name: statsObj.stat.name,
						value: statsObj.base_stat,
					});
				}

				loadedPokemons.push(newPokemon);
			}

			setPokemons((prev) => [...prev, ...loadedPokemons]);

			setIsLoading(false);
		};

		fetchData();
	}, [offset]);

	return (
		<SafeAreaView style={styles.screen}>
			<SearchHeader />
			{pokemons.length > 0 && (
				<FlatList
					data={pokemons}
					onEndReached={() => {
						setOffset((prev) => prev + 6);
					}}
					onEndReachedThreshold={0.5}
					renderItem={({ item }) => (
						<PokemonCard
							pokemon={item}
							onPress={() => {
								navigation.navigate('PokemonDetail', {
									name: item.name,
									pokemon: item,
									color: item.types[0],
								});
							}}
						/>
					)}
				/>
			)}
			{isLoading && (
				<View
					style={{
						alignItems: 'center',
						backgroundColor: 'transparent',
					}}
				>
					<ActivityIndicator color={'red'} size="large" />
				</View>
			)}
			{!isLoading && pokemons.length === 0 && (
				<View style={{ alignItems: 'center' }}>
					<Text>Problem in fetching Pokemon... Try Again</Text>
				</View>
			)}
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

// const pokemons: Pokemon[] = [
// 	new Pokemon(
// 		'Bulbasaur',
// 		'001',
// 		['grass', 'poison'],
// 		'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
// 	),
// 	new Pokemon(
// 		'Ivysaur',
// 		'002',
// 		['grass', 'poison'],
// 		'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png'
// 	),
// 	new Pokemon(
// 		'Venusaur',
// 		'003',
// 		['grass', 'poison'],
// 		'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png'
// 	),
// 	new Pokemon(
// 		'Charmander',
// 		'004',
// 		['fire'],
// 		'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'
// 	),
// 	new Pokemon(
// 		'Charmaleon',
// 		'005',
// 		['fire'],
// 		'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png'
// 	),
// 	new Pokemon(
// 		'Charizard',
// 		'006',
// 		['fire', 'flying'],
// 		'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png'
// 	),
// ];
