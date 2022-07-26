const BASE_URL = 'https://pokeapi.co/api/v2';
export const LIMIT_PER_PAGE = 30;

export async function getPokemon(pokemonName: string) {
  try {
    const response = await fetch(`${BASE_URL}/pokemon/${pokemonName}`);
    return await response.json();
  } catch (error) {
    console.error('getPokemon-api: ', error);
  }
}

export async function getPokemons(page: number = 0) {
  console.log('>>>>>>>>>>>>>>>', page);
  try {
    const offset = LIMIT_PER_PAGE * page;
    const response = await fetch(
      `${BASE_URL}/pokemon/?limit=${LIMIT_PER_PAGE}&offset=${offset}`,
    );
    return await response.json();
  } catch (error) {
    console.error('getPokemons-api: ', error);
  }
}

export const getPokemonByURL = async (url: string) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error('getPokemonByURL-api: ', error);
  }
};
