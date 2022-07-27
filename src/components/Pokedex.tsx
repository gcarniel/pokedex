import { useEffect, useState } from 'react';
import IPokemon from '../interfaces/pokemon';
import RequestPokemons from '../interfaces/reqPokemons';
import { getPokemonByURL, getPokemons } from '../services/pokeapi';
import Pagination from './Pagination';
import PokemonCard from './PokemonCard';

function Pokedex() {
  const [data, setData] = useState<RequestPokemons>({
    results: [],
    countPokemons: 0,
    pages: [],
    currentPage: 0,
  });

  const [page, setPage] = useState(0);

  const getAllPokemons = async () => {
    try {
      if (data.pages.includes(page)) {
        setData({
          ...data,
          currentPage: page,
        });
      } else {
        const pokemonsData = await getPokemons(page);

        const pokemonsPromise = pokemonsData.results.map(
          async (pokemon: any) => await getPokemonByURL(pokemon.url),
        );

        console.log('pokemonsData', pokemonsData);

        Promise.all(pokemonsPromise).then((all) => {
          setData({
            ...data,
            countPokemons: pokemonsData?.count || 0,
            results: [...data.results, ...all],
            pages: [...data?.pages, page],
            currentPage: page,
          });
        });
      }
      console.log('----------------', data);
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
        {data?.results.map((pokemon: IPokemon) => {
          return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
        })}
      </div>
      <Pagination page={page} setPage={setPage} data={data} />
    </div>
  );
}

export default Pokedex;
