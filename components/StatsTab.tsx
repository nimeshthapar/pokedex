import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Pokemontypes } from '../model/PokemonDetail';
import Bar from './Bar';
import { colors } from '../constants/Colors';

const StatsTab = ({
	backgroundColor: bgColor,
}: {
	backgroundColor: Pokemontypes;
}) => {
	return (
		<View>
			<Text style={{ color: colors[bgColor], ...styles.title }}>
				Stats
			</Text>
			<View style={{ paddingHorizontal: 20, justifyContent: 'center' }}>
				<View style={styles.data}>
					<Bar name="Attack" backgroundColor={bgColor} fill={42} />
				</View>
				<View style={styles.data}>
					<Bar name="Defense" backgroundColor={bgColor} fill={45} />
				</View>
				<View style={styles.data}>
					<Bar name="Speed" backgroundColor={bgColor} fill={56} />
				</View>
				<View style={styles.data}>
					<Bar name="Sp. Atk" backgroundColor={bgColor} fill={46} />
				</View>
				<View style={styles.data}>
					<Bar name="Sp. def" backgroundColor={bgColor} fill={49} />
				</View>
			</View>
		</View>
	);
};

export default StatsTab;

const styles = StyleSheet.create({
	bold: {
		fontFamily: 'sf-pro-bold',
		width: 100,
	},
	data: { flexDirection: 'row', marginBottom: 5, alignItems: 'center' },
	title: {
		fontSize: 25,
		fontFamily: 'sf-pro-bold',
		marginBottom: 15,
	},
});
