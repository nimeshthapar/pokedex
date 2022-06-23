import Pokemon, { Pokemontypes } from '../model/PokemonDetail';

export type HomeStackParamList = {
	Pokedex: undefined;
	PokemonDetail: { name: string; pokemon: Pokemon; color: Pokemontypes };
};
