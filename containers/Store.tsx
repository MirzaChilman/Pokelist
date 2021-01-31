import * as React from "react";
import PokemonContainer from "./PokemonContainer/PokemonContainer";

const Store = ({ children }: { children: any }) => {
  return <PokemonContainer.Provider>{children}</PokemonContainer.Provider>;
};

export default Store;