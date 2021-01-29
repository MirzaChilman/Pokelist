import * as React from "react";
import Card from "../../components/Card/Card";
import useLocalStorage from "../../utils/useLocalStorage";

const Detail = () => {
  const [ownedPokemon, setOwnedPokemon] = useLocalStorage("ownedPokemon", "");

  return (
    <>
      {ownedPokemon.length > 0 &&
        ownedPokemon.map((pokemon, index) => {
          return (
            <Card key={pokemon.name + index} to={`/pokemon/${pokemon.name}`}>
                <div>
                    <img src={pokemon.image} alt="" />
                </div>
                <div>
                    <div>
                        <h5>Original name</h5>
                        <p>{pokemon.name}</p>
                    </div>
                    <div>
                        <h5>Nick Name</h5>
                        <p>{pokemon.nickName}</p>
                    </div>
                </div>
            </Card>
          );
        })}
        {ownedPokemon.length === 0 && "Hey, you dont have pokemon, go catch one la"}
    </>
  );
};

export default Detail;
