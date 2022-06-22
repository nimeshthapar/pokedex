import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState } from 'react';

export const Icon = createIconSetFromIcoMoon(
	require('../assets/icons/selection.json'),
	'IcoMoon',
	'icomoon.ttf'
) as typeof React.ElementType;

export default function useCachedResources() {
	const [isLoadingComplete, setLoadingComplete] = useState(false);

	useEffect(() => {
		async function loadResourcesAndDataAsync() {
			try {
				SplashScreen.preventAutoHideAsync();

				await Font.loadAsync({
					'sf-pro-bold': require('../assets/fonts/SF-Pro-Text-Bold.otf'),
					'sf-pro': require('../assets/fonts/SF-Pro-Display-Regular.otf'),
					IcoMoon: require('../assets/icons/icomoon.ttf'),
				});
			} catch (e) {
				console.warn(e);
			} finally {
				setLoadingComplete(true);
				SplashScreen.hideAsync();
			}
		}

		loadResourcesAndDataAsync();
	}, []);

	return isLoadingComplete;
}
