import * as React from "react";
import PokemonContainer from "../../containers/PokemonContainer/PokemonContainer";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../../components/Card/Card";
import useLocalStorage from "../../utils/useLocalStorage";

const List = () => {
  const [ownedPokemon] = useLocalStorage("ownedPokemon", "");
  const pokemonContainer = PokemonContainer.useContainer();
  const { fetchPokemon, pokemons } = pokemonContainer;

  React.useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <>
      <h3>Owned Pokemon : {ownedPokemon.length}</h3>
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
    </>
  );
};

export default List;
