import {
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { RouteProp } from '@react-navigation/native';
import { HomeStackParamList } from '../types/navTypes';
import { backgroundColors, colors, textColor } from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import TypesList from '../components/TypesList';
import BasicTab from '../components/BasicTab';
import { Pokemontypes } from '../model/PokemonDetail';
import StatsTab from '../components/StatsTab';
import { weaknessConverter } from '../util/weaknessconverter';

const pokemonObj: {
	weaknesses: Pokemontypes[];
} = {
	weaknesses: ['fire', 'psychic', 'flying', 'ice'],
};

const DetailScreen = ({
	route,
	navigation,
}: {
	route: RouteProp<HomeStackParamList, 'PokemonDetail'>;
	navigation: NativeStackNavigationProp<HomeStackParamList, 'PokemonDetail'>;
}) => {
	const [isBasic, setIsBasic] = useState(true);
	const [isStats, setIsStats] = useState(false);
	const bgColor = route.params.color;
	const pokemonWeakness = weaknessConverter(route.params.pokemon.types);

	return (
		<SafeAreaView
			style={{
				...styles.screen,
				backgroundColor: backgroundColors[bgColor],
			}}
		>
			<TouchableOpacity
				onPress={() => {
					navigation.goBack();
				}}
				style={styles.btn}
			>
				<Ionicons name="ios-arrow-back" size={30} color="white" />
			</TouchableOpacity>
			<View style={styles.pokeContainer}>
				<View>
					<Image
						source={{ uri: route.params.pokemon.image }}
						style={styles.img}
					/>
					<TypesList
						types={route.params.pokemon.types}
						center={true}
					/>
				</View>
				<Text
					style={{
						...styles.name,
						color: backgroundColors[bgColor],
					}}
				>
					{route.params.name.toUpperCase()}
				</Text>
			</View>
			<View style={styles.tabs}>
				<TouchableOpacity
					style={styles.tabBtn}
					onPress={() => {
						setIsStats(false), setIsBasic(true);
					}}
				>
					<Text
						style={
							isBasic
								? { ...styles.active, color: colors[bgColor] }
								: styles.tabText
						}
					>
						Basic
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.tabBtn}
					onPress={() => {
						setIsBasic(false), setIsStats(true);
					}}
				>
					<Text
						style={
							isStats
								? { ...styles.active, color: colors[bgColor] }
								: styles.tabText
						}
					>
						Stats
					</Text>
				</TouchableOpacity>
			</View>
			<ScrollView style={styles.card}>
				{isBasic && (
					<BasicTab
						weakness={pokemonWeakness}
						name={route.params.name}
						abilities={route.params.pokemon.ablities}
						BackgroundColor={bgColor}
						height={route.params.pokemon.height}
						weight={route.params.pokemon.weight}
					/>
				)}
				{isStats && (
					<StatsTab
						backgroundColor={bgColor}
						stats={route.params.pokemon.stats}
					/>
				)}
			</ScrollView>
		</SafeAreaView>
	);
};

export default DetailScreen;

const styles = StyleSheet.create({
	screen: { flex: 1, marginTop: StatusBar.currentHeight },
	pokeContainer: {
		padding: 20,
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'hidden',
		position: 'relative',
		flexDirection: 'row',
	},
	img: {
		height: 150,
		width: 150,
	},
	name: {
		textShadowColor: textColor.white,
		textShadowOffset: { width: 8, height: 8 },
		textShadowRadius: 1,
		fontSize: 75,
		opacity: 0.8,
		position: 'absolute',
		zIndex: -1,
		flexShrink: 1,
	},
	btn: {
		justifyContent: 'center',
		alignItems: 'flex-start',
		width: 30,
	},
	tabs: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
	},
	tabText: {
		color: textColor.white,
		textAlign: 'center',
		fontSize: 20,
		fontFamily: 'sf-pro-bold',
	},
	active: {
		borderRadius: 5,
		borderWidth: 2,
		backgroundColor: textColor.white,
		borderColor: textColor.white,
		color: backgroundColors.electric,
		textAlign: 'center',
		fontSize: 20,
		fontFamily: 'sf-pro-bold',
	},
	tabBtn: {
		flex: 1,
	},
	card: {
		flex: 1,
		backgroundColor: '#fff',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		padding: 20,
	},
});
