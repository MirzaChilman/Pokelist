import * as React from "react";
import { hot } from "react-hot-loader";
import { Button, Layout, Row, Col } from "antd";
import PokeListContainer from "./containers/PokeListContainer";

const App = () => {
  const pokeListContainer = PokeListContainer.useContainer();
  const { testState, setTestState } = pokeListContainer;
  return (
    <React.Suspense fallback={"loading"}>
      <Layout>
        {testState}
        <Row>
          <Col>
            <Button onClick={() => setTestState(String(Math.random()))}>
              Test Button
            </Button>
          </Col>
        </Row>
      </Layout>
    </React.Suspense>
  );
};

export default hot(module)(App);
