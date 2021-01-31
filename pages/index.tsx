import React, { useEffect } from "react";
import Head from "next/head";
import InfiniteScroll from "react-infinite-scroll-component";

import PokemonContainer from "../containers/PokemonContainer/PokemonContainer";
import Card from "../components/Card/Card";
import useLocalStorage from "../utils/useLocalStorage";
import { isMobile, isTablet } from "react-device-detect";
import { AiOutlineShareAlt } from "react-icons/ai";
import styled from "@emotion/styled";

const ShareButtonWrapper = styled.div`
  font-size: 32px;
  :hover {
    cursor: pointer;
    color: wheat;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Home() {
  const [ownedPokemon] = useLocalStorage<any>("ownedPokemon", "");
  const pokemonContainers = PokemonContainer.useContainer();
  const { fetchPokemon, pokemons } = pokemonContainers;
  useEffect(() => {
    fetchPokemon();
  }, []);

  const renderShareButton = () => {
    return (
      <ShareButtonWrapper>
        <AiOutlineShareAlt
          onClick={() => {
            if (navigator.share) {
              navigator
                .share({
                  title: "Poke list",
                  text: "Check out poke list.",
                  url: "https://pokelist.vercel.app/",
                })
                .then(() => alert("Successful Share"))
                .catch((error) => console.error(`Fail to share ${error}`));
            }
          }}
        />
      </ShareButtonWrapper>
    );
  };

  return (
    <div>
      <Head>
        <title>Pokelist</title>
        <link rel="icon" href="/favicon.ico" />
        <title lang="en">Pokelist</title>
      </Head>
      <HeaderWrapper>
        <h3>Owned Pokemon: {ownedPokemon ? ownedPokemon.length : 0}</h3>
        {(isMobile || isTablet) && renderShareButton()}
      </HeaderWrapper>
      <InfiniteScroll
        dataLength={pokemons.results.length} //This is important field to render the next data
        next={fetchPokemon}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {pokemons.results.map((result, index) => {
          return (
            <Card
              key={index + result.name}
              to={`/pokemon/${result.name}`}
              dataTestids={`pokemonName:${result.name}`}
            >
              {result.name}
            </Card>
          );
        })}
      </InfiniteScroll>
    </div>
  );
}
