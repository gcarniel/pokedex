import { useState } from 'react';
import { pokemonTypes } from '../assets/types';

interface PokemonTypeProps {
  type: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  };
}

function PokemonType({ type }: PokemonTypeProps) {
  const [types] = useState(pokemonTypes);

  const typePokemon = types.find((t) => t.name === type.type.name);

  const bgColor = typePokemon?.bg_color ? typePokemon?.bg_color : '#0f172a';
  return (
    <span
      style={{ backgroundColor: bgColor }}
      className={`rounded-md px-1 mr-1 text-center`}
    >
      {typePokemon?.name_pt}
    </span>
  );
}

export default PokemonType;
