import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Icon } from '../hooks/useCachedResources';
import { colors, backgroundColors } from '../constants/Colors';
import { Pokemontypes } from '../model/PokemonDetail';

const BasicTab = ({
	BackgroundColor: bgColor,
	weakness,
	height,
	weight,
	category,
	name,
}: {
	BackgroundColor: Pokemontypes;
	weakness: Pokemontypes[];
	height: string;
	weight: string;
	category: string;
	name: string;
}) => {
	return (
		<View>
			<Text style={{ color: colors[bgColor], ...styles.title }}>
				Pokemon Data
			</Text>
			<View style={{ paddingLeft: 25, justifyContent: 'center' }}>
				<View style={styles.data}>
					<Text style={styles.bold}>Name: </Text>
					<Text>{name}</Text>
				</View>
				<View style={styles.data}>
					<Text style={styles.bold}>Weight: </Text>
					<Text>{weight}</Text>
				</View>
				<View style={styles.data}>
					<Text style={styles.bold}>Height: </Text>
					<Text>{height}</Text>
				</View>
				<View style={styles.data}>
					<Text style={styles.bold}>Category: </Text>
					<Text>{category}</Text>
				</View>
				<View style={styles.data}>
					<Text style={styles.bold}>Weakness: </Text>
					<View style={styles.weakness}>
						{weakness.map((w) => (
							<View
								key={w}
								style={{
									backgroundColor: backgroundColors[w],
									...styles.icon,
								}}
							>
								<Icon
									name={w.toLowerCase()}
									color={'white'}
									size={16}
								/>
							</View>
						))}
					</View>
				</View>
			</View>
		</View>
	);
};

export default BasicTab;

const styles = StyleSheet.create({
	weakness: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'center',
	},
	data: { flexDirection: 'row', marginBottom: 5, alignItems: 'center' },
	icon: {
		padding: 5,
		marginHorizontal: 4,
	},
	title: {
		fontSize: 25,
		fontFamily: 'sf-pro-bold',
		marginBottom: 15,
	},
	bold: {
		fontFamily: 'sf-pro-bold',
		width: 100,
	},
});
