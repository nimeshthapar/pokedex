export const imgUrlSuffix =
	'https://assets.pokemon.com/assets/cms2/img/pokedex/full/';

export const changeNumtoId = (x: number) => {
	if (x < 10) return `00${x}`;
	if (x < 100) return `0${x}`;
	return `${x}`;
};

export const convertId = (id: string) => {
	if (id[1] === '0' && id[0] == '0') return +id[2];
	if (id[0] === '0') return +id.slice(1);
	return +id;
};

export const POKEMON_COUNT = 905;
