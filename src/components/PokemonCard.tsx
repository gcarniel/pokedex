import IPokemon from '../interfaces/pokemon';
import { getPokemon } from '../services/pokeapi';
import PokemonType from './PokemonType';

interface PokemonCardProps {
  pokemon: IPokemon;
}

function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <div
      className={`w-[32%] border border-green-400 bg-green-800 
                    rounded-lg px-2 my-1 cursor-pointer`}
    >
      <div className="flex justify-between p-2">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <div className="flex ">
          <span className="mr-2">#{pokemon.id}</span>
          <h3 className="capitalize">{pokemon.name}</h3>
        </div>
      </div>
      <div className="px-1 py-2">
        {pokemon.types.map((type: any) => {
          return <PokemonType key={type.slot} type={type} />;
        })}
      </div>
    </div>
  );
}

export default PokemonCard;
