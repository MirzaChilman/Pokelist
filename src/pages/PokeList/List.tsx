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
      <button
        onClick={() => {
          if (navigator.share) {
            navigator
              .share({
                title: "Poke list",
                text: "Check out poke list.",
                url: "https://pokelist.vercel.app/",
              })
              .then(() => alert("Successful Share"))
              .catch((error) => alert(`fail to share ${error}`));
          }
        }}
      >
        Share
      </button>
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
              <img src={result.url} alt="" />
            </Card>
          );
        })}
      </InfiniteScroll>
    </>
  );
};

export default List;
