import React, { useEffect } from "react";
import Head from "next/head";
import InfiniteScroll from "react-infinite-scroll-component";

import PokemonContainer from "../containers/PokemonContainer/PokemonContainer";
import Card from "components/Card/Card";
import useLocalStorage from "../utils/useLocalStorage";


export default function Home() {
  const [ownedPokemon] = useLocalStorage<any>("ownedPokemon", "");
  const pokemonContainers = PokemonContainer.useContainer();
  const { fetchPokemon, pokemons } = pokemonContainers;
  useEffect(() => {
    fetchPokemon();
  }, []);
  return (
    <div>
      <Head>
        <title>Pokelist</title>
        <link rel="icon" href="/favicon.ico" />
        <title lang="en">Pokelist</title>
      </Head>
        <h3>Owned Pokemon: {ownedPokemon ? ownedPokemon.length : 0}</h3>
        <InfiniteScroll
          dataLength={pokemons.results.length} //This is important field to render the next data
          next={fetchPokemon}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {pokemons.results.map((result, index) => {
            return (
              <Card key={index + result.name} to={`/pokemon/${result.name}`}>
                {result.name}
              </Card>
            );
          })}
        </InfiniteScroll>
    </div>
  );
}
