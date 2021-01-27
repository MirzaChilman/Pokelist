import * as React from "react";
import { hot } from "react-hot-loader";
import { Button, Layout, Row, Col, notification } from "antd";
import PokeListContainer from "./containers/PokeListContainer";

const App = () => {
  const pokeListContainer = PokeListContainer.useContainer();
  const { testState, setTestState, tryBaseEvent, event } = pokeListContainer;

  React.useEffect(() => {
    event.subscribe("success", (msg) => notification.success({ message: msg }));
    return () =>
      event.unsubscribe("success", (msg) =>
        notification.success({ message: msg })
      );
  }, [event]);

  return (
    <React.Suspense fallback={"loading"}>
      <Layout>
        {testState}
        <Row>
          <Col>
            <Button
              onClick={() => {
                setTestState(String(Math.random()));
                tryBaseEvent();
              }}
            >
              Test Button
            </Button>
          </Col>
        </Row>
      </Layout>
    </React.Suspense>
  );
};

export default hot(module)(App);
