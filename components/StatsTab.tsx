import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Pokemontypes, StatsTypes } from '../model/PokemonDetail';
import Bar from './Bar';
import { colors } from '../constants/Colors';

const StatsTab = ({
	backgroundColor: bgColor,
	stats,
}: {
	backgroundColor: Pokemontypes;
	stats: StatsTypes[];
}) => {
	let maximumVal = stats[0].value;
	for (const stat of stats) maximumVal = Math.max(maximumVal, stat.value);
	maximumVal = maximumVal < 100 ? 100 : maximumVal;

	return (
		<View>
			<Text style={{ color: colors[bgColor], ...styles.title }}>
				Stats
			</Text>
			<View style={{ paddingHorizontal: 20, justifyContent: 'center' }}>
				{stats.map((stat) => {
					return (
						<View key={stat.name} style={styles.data}>
							<Bar
								name={
									stat.name === 'special-attack' ||
									stat.name === 'special-defense'
										? stat.name === 'special-attack'
											? 'Sp. Atk'
											: 'Sp. Df'
										: stat.name
								}
								backgroundColor={bgColor}
								fill={(stat.value / maximumVal) * 100}
								value={stat.value}
							/>
						</View>
					);
				})}
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
