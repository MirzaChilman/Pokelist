import { useState } from "react";
import { createContainer } from "unstated-next";
import BaseAppEvent from "../utils/BaseAppEvent";


type EventTypes = {
  success: string;
}

const Container = () => {
  const [testState, setTestState] = useState<string>("asdas");
  const event = BaseAppEvent<EventTypes>()

  const tryBaseEvent  = () => {
    event.emit("success", "It is a big success")
  }


  return {
    testState,
    setTestState,
    tryBaseEvent,
    event
  };
};

const PokeListContainer = createContainer(Container);
export default PokeListContainer;
