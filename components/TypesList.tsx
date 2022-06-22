import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Pokemontypes } from '../model/PokemonDetail';
import { colors, textColor } from '../constants/Colors';
import { Icon } from '../hooks/useCachedResources';

const TypesList = ({
	types,
	center,
}: {
	types: Pokemontypes[];
	center?: boolean;
}) => {
	return (
		<View
			style={
				center
					? {
							...styles.types,
							justifyContent: 'center',
							alignItems: 'center',
					  }
					: styles.types
			}
		>
			{types.map((t) => (
				<View
					key={t}
					style={{
						...styles.typeItem,
						backgroundColor: colors[t],
					}}
				>
					<Icon name={t} size={14} color={textColor.white} />
					<Text style={styles.typeText}>
						{t[0].toUpperCase() + t.substring(1)}
					</Text>
				</View>
			))}
		</View>
	);
};

export default TypesList;

const styles = StyleSheet.create({
	typeItem: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
		paddingVertical: 5,
		paddingHorizontal: 8,
		marginRight: 5,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.26,
		shadowRadius: 8,
		elevation: 5,
	},
	typeText: {
		color: textColor.white,
		marginLeft: 5,
		fontFamily: 'sf-pro',
	},
	types: {
		flexDirection: 'row',
	},
});
