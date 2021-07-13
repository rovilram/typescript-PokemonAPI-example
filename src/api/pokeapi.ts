import { PokemonData } from '../interfaces/pokemonData';
import { Pokemons } from '../interfaces/pokemons';

export const apiCall = async (endpoint: string) => {
  const API_URL = 'https://pokeapi.co/api/v2/';

  return fetch(API_URL + endpoint).then((res) => res.json());
};

export const fetchPokemons = async (
  limit: number = 1118,
  offset: number = 0,
): Promise<Pokemons> => {
  return apiCall(`pokemon?limit=${limit}&offset=${offset}`);
};

export const fetchPokemonData = async (id: string): Promise<PokemonData> => {
  return apiCall(`pokemon/${id}`);
};
