export type Pokemontypes =
	| 'bug'
	| 'dark'
	| 'dragon'
	| 'electric'
	| 'fairy'
	| 'fighting'
	| 'fire'
	| 'flying'
	| 'ghost'
	| 'grass'
	| 'ground'
	| 'ice'
	| 'normal'
	| 'poison'
	| 'psychic'
	| 'rock'
	| 'steel'
	| 'water';

export type StatsTypes = {
	name: 'attack' | 'defense' | 'speed' | 'special-attack' | 'special-defense';
	value: number;
};

class Pokemon {
	constructor(
		public name: string,
		public id: string,
		public types: Pokemontypes[],
		public image: string,
		public stats: StatsTypes[],
		public ablities: string[],
		public height: string,
		public weight: string
	) {}
}

export default Pokemon;
