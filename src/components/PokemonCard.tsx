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
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h3 className="capitalize">{pokemon.name}</h3>
      {pokemon.types.map((type: any) => {
        return <PokemonType key={type.slot} type={type} />;
      })}
    </div>
  );
}

export default PokemonCard;
