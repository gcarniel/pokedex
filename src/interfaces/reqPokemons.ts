import IPokemon from './pokemon';

export default interface RequestPokemons {
  results: IPokemon[];
  countPokemons: number;
  pages: number[];
  currentPage: number;
}
