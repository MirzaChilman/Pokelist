const BaseAppEvent = <T>() => {
  const listeners: Map<keyof T, Set<Function>> = new Map();
  const getEventListenerSet = (eventName: keyof T) => {
    let listener = listeners.get(eventName);
    if (!listener) {
      listener = new Set();
      listeners.set(eventName, listener);
    }
    return listener;
  };
  const emit = <K extends keyof T>(eventName: keyof T, callback: T[K]) => {
    return Array.from(getEventListenerSet(eventName)).map((listener) =>
      listener(callback)
    );
  };

  const subscribe = <K extends keyof T>(
    eventName: K,
    listener: (payload: T[K]) => unknown
  ) => {
    getEventListenerSet(eventName).add(listener);
  };

  const unsubscribe = <K extends keyof T>(
    eventName: K,
    listener: (payload: T[K]) => unknown
  ) => {
    getEventListenerSet(eventName).delete(listener);
  };

  const clear = <K extends keyof T>(eventName: K): void => {
    getEventListenerSet(eventName).clear();
  };

  return {
    emit,
    subscribe,
    unsubscribe,
    clear,
  };
};

export default BaseAppEvent;
