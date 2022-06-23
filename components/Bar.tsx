import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { backgroundColors } from '../constants/Colors';
import { Pokemontypes } from '../model/PokemonDetail';

const Bar = ({
	backgroundColor: bgColor,
	name,
	fill,
	value,
}: {
	backgroundColor: Pokemontypes;
	name: string;
	fill: number;
	value: number;
}) => {
	return (
		<>
			<Text style={styles.bold}>
				{name[0].toUpperCase() + name.substring(1)}:
			</Text>
			<View style={styles.bar}>
				<View
					style={{
						...styles.bar,
						backgroundColor: backgroundColors[bgColor],
						width: `${fill}%`,
					}}
				></View>
			</View>
			<Text>{value}</Text>
		</>
	);
};

export default Bar;

const styles = StyleSheet.create({
	bold: {
		fontFamily: 'sf-pro-bold',
		width: 100,
	},
	bar: {
		flex: 1,
		height: 8,
		backgroundColor: '#e1e1e1',
		borderRadius: 16,
		marginRight: 10,
	},
});
