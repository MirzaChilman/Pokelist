import * as React from "react";
import { hot } from "react-hot-loader";
import { Button, Layout } from "antd";
import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import PokeListContainer from "./containers/PokeListContainer";

const App = () => {
  const pokeListContainer = PokeListContainer.useContainer();
  const { testState, setTestState } = pokeListContainer;
  return (
    <React.Suspense fallback={"loading"}>
      <Layout>
        {testState}
        <Button onClick={() => setTestState(String(Math.random()))}>
          Test Button
        </Button>
      </Layout>
    </React.Suspense>
  );
};

export default hot(module)(App);
