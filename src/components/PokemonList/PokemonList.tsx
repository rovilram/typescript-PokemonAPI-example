import { useEffect, useState } from 'react';
import { fetchPokemonData, fetchPokemons } from '../../api/pokeapi';
import { PokemonData } from '../../interfaces/pokemonData';
import { PokemonCard } from '../PokemonCard/PokemonCard';

export const PokemonList = () => {
  const [pokemons, setPokemons] = useState<PokemonData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    fillPokemonsArray();
  }, []);

  const fillPokemonsArray = () => {
    // set loading state and reset pokemons array
    setIsLoading(true);

    setPokemons([]);
    // fetch first original 151 pokemons

    fetchPokemons(1000, 0).then(async ({ results }) => {
      let newPokemons: PokemonData[] = [];

      // iterate over each pokemon an add to array
      await Promise.all(
        results.map(async (pokemon, i) => {
          await fetchPokemonData(pokemon.name).then(async (json) => {
            newPokemons[i] = json;
          });
        }),
      );

      setPokemons(newPokemons);
      setIsLoading(false);
    });
  };

  if (isLoading) return <div>ESPERANDO!!</div>;

  return (
    <div className="d-flex flex-wrap">
      {pokemons.map((pokemon) => (
        <PokemonCard>{pokemon}</PokemonCard>
      ))}
    </div>
  );
};
