import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableNativeFeedback,
} from 'react-native';
import React, { memo } from 'react';
import Pokemon from '../model/PokemonDetail';
import { backgroundColors, textColor } from '../constants/Colors';
import TypesList from './TypesList';

type PokemonProp = {
	pokemon: Pokemon;
	onPress: () => void;
};

const PokemonCard = ({ pokemon, onPress }: PokemonProp) => {
	const { id, name, types, image } = pokemon;
	const color = types[0];
	return (
		<TouchableNativeFeedback onPress={onPress}>
			<View
				style={{
					...styles.card,
					backgroundColor: backgroundColors[color],
				}}
			>
				<View style={styles.textContainer}>
					<Text style={styles.id}>#{id}</Text>
					<Text style={styles.name}>{name}</Text>
					<TypesList types={types} />
					<View style={styles.pattern}>
						<Image
							source={require('../assets/images/Pattern.png')}
							style={styles.patternImg}
							resizeMode="contain"
						/>
					</View>
				</View>
				<View style={styles.imageContainer}>
					<Image
						source={{ uri: image }}
						style={styles.image}
						resizeMode="stretch"
					/>
					<View style={styles.cardBg}>
						<Image
							source={require('../assets/images/PokeballCardBg.png')}
							style={styles.cardBgImg}
							resizeMode="cover"
						/>
					</View>
				</View>
			</View>
		</TouchableNativeFeedback>
	);
};

export default memo(PokemonCard);

const styles = StyleSheet.create({
	id: {
		color: textColor.number,
		fontFamily: 'sf-pro',
		fontSize: 14,
	},
	name: {
		fontFamily: 'sf-pro-bold',
		fontSize: 22,
		color: textColor.white,
		marginBottom: 5,
	},
	image: {
		height: 160,
		width: 120,
		position: 'relative',
		bottom: 40,
	},
	card: {
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.26,
		shadowRadius: 8,
		elevation: 5,
		borderRadius: 10,
		flexDirection: 'row',
		marginVertical: 15,
		marginHorizontal: 20,
		height: 110,
		padding: 10,
	},
	textContainer: {
		flex: 2,
		position: 'relative',
	},

	imageContainer: {
		flex: 1,
		position: 'relative',
	},

	pattern: {
		position: 'absolute',
		top: 0,
		left: '40%',
		zIndex: -1,
	},
	patternImg: {
		height: 40,
		width: 100,
	},
	cardBg: {
		position: 'absolute',
		top: -7.5,
		right: -10,
		zIndex: -1,
	},
	cardBgImg: {
		height: 110,
		width: 135,
	},
});
