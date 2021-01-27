import * as React from "react";
import PokeListContainer from "./PokeListContainer";

const Store = ({ children }: { children: any }) => {
  return <PokeListContainer.Provider>{children}</PokeListContainer.Provider>;
};

export default Store;