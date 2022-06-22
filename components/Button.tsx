import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

type ButtonProp = {
	title: string;
	onPress: () => void;
	style?: object;
	colors?: string[];
};

const Button = ({ title, onPress, style, colors }: ButtonProp) => {
	return (
		<TouchableOpacity
			style={{ ...style, ...styles.button }}
			onPress={onPress}
		>
			<LinearGradient
				colors={
					colors && colors.length > 0 ? colors : ['#ed5e4e', 'yellow']
				}
			>
				<Text style={{ ...styles.text, color: '#fff' }}>{title}</Text>
			</LinearGradient>
		</TouchableOpacity>
	);
};

export default Button;

const styles = StyleSheet.create({
	button: {
		height: 35,
		borderRadius: 5,
	},
	text: {
		fontFamily: 'sf-pro',
		fontSize: 16,
		textAlign: 'center',
	},
});
