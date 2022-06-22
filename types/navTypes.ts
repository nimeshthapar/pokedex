import { Pokemontypes } from '../model/PokemonDetail';

export type HomeStackParamList = {
	Pokedex: undefined;
	PokemonDetail: { id: string; name: string; color: Pokemontypes };
};

export type FavoriteStackParamList = {
	Favorites: undefined;
	FavPokemonDetail: { id: string; name: string; color: Pokemontypes };
};

export type RootTabParamList = {
	Home: HomeStackParamList;
	Favorite: FavoriteStackParamList;
};
