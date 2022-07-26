import { useEffect, useState } from 'react';
import IPokemon from '../interfaces/pokemon';
import { getPokemonByURL, getPokemons } from '../services/pokeapi';
import Pagination from './Pagination';
import PokemonCard from './PokemonCard';

function Pokedex() {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);

  const getAllPokemons = async () => {
    try {
      const pokemonsData = await getPokemons(page);

      const pokemonsPromise = pokemonsData.results.map(
        async (pokemon: any) => await getPokemonByURL(pokemon.url),
      );

      setCount(pokemonsData.count);

      console.log(pokemonsData);
      Promise.all(pokemonsPromise).then((all) => {
        setPokemons(all);
        console.log(all);
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllPokemons();
  }, [page]);

  return (
    <div className="w-full bg-green-700">
      <div className="flex flex-wrap justify-between p-2">
        {pokemons.map((pokemon: IPokemon) => {
          return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
        })}
      </div>
      <Pagination page={page} setPage={setPage} count={count} />
    </div>
  );
}

export default Pokedex;
