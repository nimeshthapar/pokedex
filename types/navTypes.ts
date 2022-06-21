export type HomeStackParamList = {
	Pokedex: undefined;
	PokemonDetail: undefined;
};

export type FavoriteStackParamList = {
	Favorites: undefined;
	FavPokemonDetail: undefined;
};

export type RootTabParamList = {
	Home: HomeStackParamList;
	Favorite: FavoriteStackParamList;
};
