import { useState } from "react";
import { createContainer } from "unstated-next";
import axios from "axios";
import apiClient from "../../services/axios";
import {
  PokemonDetailResponse,
  PokemonResponse,
} from "./PokemonContainerModel";


const DEFAULT_LIMIT = 20;
const Container = () => {
  const [fetchingPokemons, setFetchingPokemons] = useState<boolean>(false);
  const [fetchingPokemonDetail, setFetchingPokemonDetail] = useState<boolean>(
    false
  );
  const [pokemons, setPokemons] = useState<PokemonResponse>({
    count: 0,
    next: null,
    previous: null,
    results: [],
  });
  const [
    pokemonDetail,
    setPokemonDetail,
  ] = useState<PokemonDetailResponse | null>(null);

  const fetchPokemon = async () => {
    try {
      setFetchingPokemons(true);
      if (!pokemons.next && pokemons.previous) return;
      if (!pokemons.previous) {
        const response = await apiClient.get(`pokemon?limit=${DEFAULT_LIMIT}`);
        setPokemons(response.data);
      }
      if (pokemons.next) {
        const response = await axios.get(pokemons.next);
        setPokemons((prevState) => {
          return {
            ...prevState,
            previous: response.data.previous,
            next: response.data.next,
            results: [...prevState.results, ...response.data.results],
          };
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setFetchingPokemons(false);
    }
  };

  const fetchPokemonDetail = async (name: string) => {
    try {
      setFetchingPokemonDetail(true);
      const response = await apiClient.get(`pokemon/${name}`);
      setPokemonDetail(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setFetchingPokemonDetail(false);
    }
  };

  return {
    fetchPokemon,
    pokemons,
    fetchingPokemons,
    fetchPokemonDetail,
    pokemonDetail,
    fetchingPokemonDetail
  };
};

const PokemonContainer = createContainer(Container);
export default PokemonContainer;
