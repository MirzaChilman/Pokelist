import { useState } from "react";
import { createContainer } from "unstated-next";

const Container = () => {
  const [testState, setTestState] = useState<string>("asdas");

  return {
    testState,
    setTestState,
  };
};

const PokeListContainer = createContainer(Container);
export default PokeListContainer;
