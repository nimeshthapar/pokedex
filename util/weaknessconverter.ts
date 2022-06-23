import { Pokemontypes } from '../model/PokemonDetail';

const weakness: {
	bug: Pokemontypes[];
	dark: Pokemontypes[];
	dragon: Pokemontypes[];
	electric: Pokemontypes[];
	fairy: Pokemontypes[];
	fighting: Pokemontypes[];
	fire: Pokemontypes[];
	flying: Pokemontypes[];
	ghost: Pokemontypes[];
	grass: Pokemontypes[];
	ground: Pokemontypes[];
	ice: Pokemontypes[];
	normal: Pokemontypes[];
	poison: Pokemontypes[];
	psychic: Pokemontypes[];
	rock: Pokemontypes[];
	steel: Pokemontypes[];
	water: Pokemontypes[];
} = {
	bug: ['flying', 'rock', 'fire'],
	dark: ['fighting', 'bug', 'fairy'],
	dragon: ['ice', 'dragon', 'fairy'],
	electric: ['ground'],
	fairy: ['poison', 'steel'],
	fighting: ['flying', 'psychic', 'fairy'],
	fire: ['ground', 'rock', 'water'],
	flying: ['rock', 'electric', 'ice'],
	ghost: ['dark'],
	grass: ['flying', 'poison', 'bug', 'fire', 'ice'],
	ground: ['water', 'grass', 'ice'],
	ice: ['fighting', 'rock', 'steel', 'fire'],
	normal: ['rock', 'steel', 'fighting'],
	poison: ['ground', 'psychic'],
	psychic: ['bug', 'ghost', 'dark'],
	rock: ['fighting', 'ground', 'steel', 'water', 'grass'],
	steel: ['fighting', 'ground', 'fire'],
	water: ['grass', 'electric'],
};

export const weaknessConverter = (types: Pokemontypes[]) => {
	const typeWeakness = new Set<Pokemontypes>();
	for (const type of types)
		for (const weakType of weakness[type]) typeWeakness.add(weakType);

	return [...typeWeakness];
};
