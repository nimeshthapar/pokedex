import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { textColor } from '../constants/Colors';

const SearchHeader = () => {
	return (
		<View style={styles.search}>
			<Text style={styles.title}>Pokédex</Text>
			<Text style={styles.text}>
				Search Pokemons with their name or with their Pokedex number.
			</Text>
			<View style={styles.searchBar}>
				<Ionicons name="ios-search" size={20} color="#a5a5a5" />
				<TextInput
					style={styles.input}
					placeholder={'What Pokemon are you looking for?'}
				/>
			</View>
			<View style={styles.imgBg}>
				<Image
					style={styles.img}
					resizeMode="cover"
					source={require('../assets/images/PokeballBg.png')}
				/>
			</View>
		</View>
	);
};

export default SearchHeader;

const styles = StyleSheet.create({
	title: {
		color: textColor.black,
		fontFamily: 'sf-pro-bold',
		fontSize: 30,
		textAlign: 'center',
		marginVertical: 20,
	},
	img: {
		height: 150,
		width: 400,
	},
	imgBg: {
		position: 'absolute',
		top: 0,
		left: 0,
		zIndex: -1,
		backgroundColor: '#f5f5f5',
	},
	search: {
		width: '100%',
		paddingVertical: 10,
		paddingHorizontal: 20,
		position: 'relative',
		overflow: 'hidden',
	},
	text: {
		color: textColor.grey,
		fontFamily: 'sf-pro',
		fontSize: 16,
		fontWeight: '600',
	},
	input: {
		marginLeft: 15,
	},
	searchBar: {
		marginTop: 10,
		borderRadius: 25,
		paddingHorizontal: 15,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#e1e1e1',
	},
});
