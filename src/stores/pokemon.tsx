import { TPokemon } from '~/api/type';
import create from 'zustand';
import { z } from 'zod';

interface PokemonState {
  pokemons: TPokemon[];
  pokemon: TPokemon | null;
  setPokemons: (list: TPokemon[]) => void;
  setPokemon: (pokemon: TPokemon) => void;
}

export const usePokemonStore = create<PokemonState>((set) => ({
  pokemons: [],
  pokemon: null,
  setPokemons: (list) => set(() => ({ pokemons: list })),
  setPokemon: (pokemon) => set(() => ({ pokemon: pokemon })),
}));
