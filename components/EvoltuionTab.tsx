import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Pokemontypes } from '../model/PokemonDetail';
import { colors } from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

let evolutionObj = {
	evolves_to: [
		{
			evolves_to: [
				{
					evolves_to: null,
					name: 'Venusaur',
					image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
				},
			],
			name: 'Ivysaur',
			image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
			level: 32,
		},
	],
	name: 'bulbasaur',
	image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
	level: 16,
};

const EvoltuionTab = ({
	backgroundColor: bgColor,
	level,
}: {
	backgroundColor: Pokemontypes;
	level: number;
}) => {
	return (
		<View>
			<Text style={{ color: colors[bgColor], ...styles.title }}>
				Evolution
			</Text>
			<View style={{ paddingHorizontal: 20, justifyContent: 'center' }}>
				{/* <View>
					<Image source={} />
					<View>
						<Ionicons
							name="ios-arrow-forward"
							size={25}
							color={colors[bgColor]}
						/>
						<Text>Level {level}</Text>
					</View>
					<Image />
				</View> */}
			</View>
		</View>
	);
};

export default EvoltuionTab;

const styles = StyleSheet.create({
	data: { flexDirection: 'row', marginBottom: 5, alignItems: 'center' },
	title: {
		fontSize: 25,
		fontFamily: 'sf-pro-bold',
		marginBottom: 15,
	},
});
