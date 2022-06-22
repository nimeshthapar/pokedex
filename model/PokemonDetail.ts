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

class Pokemon {
	constructor(
		public name: string,
		public id: string,
		public types: Pokemontypes[],
		public image: string
	) {}
}

export default Pokemon;
