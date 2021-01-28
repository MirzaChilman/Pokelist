import * as React from "react";
import { hot } from "react-hot-loader";
import PokeListContainer from "./containers/PokeListContainer";

const App = () => {
  const pokeListContainer = PokeListContainer.useContainer();
  const { testState, setTestState, tryBaseEvent, event } = pokeListContainer;

  return (
    <React.Suspense fallback={"loading"}>
      {testState}
      <button
        onClick={() => {
          setTestState(String(Math.random()));
          tryBaseEvent();
        }}
      >
        Test Button
      </button>
    </React.Suspense>
  );
};

export default hot(module)(App);
