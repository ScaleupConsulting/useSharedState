const { useState, useEffect } = require("react");

const isSSR = typeof window === "undefined";

const EventTarget = isSSR ? Object : window.EventTarget;

class SharedStateTarget extends EventTarget {
  constructor(initialStateOfNewComponents) {
    super();
    this.initialStateOfNewComponents = initialStateOfNewComponents;
  }

  useSharedState() {
    const [state, setState] = useState(this.initialStateOfNewComponents);
    const setSharedState = (detail) => super.dispatchEvent(new CustomEvent("set", { detail }));

    useEffect(() => {
      const eventListener = ({ detail }) => {
        if (typeof detail === "function") {
          setState((...args) => {
            const nextState = detail(...args);
            this.initialStateOfNewComponents = nextState;
            return nextState;
          });
        } else {
          this.initialStateOfNewComponents = detail;
          setState(detail);
        }
      };

      super.addEventListener("set", eventListener);
      return () => super.removeEventListener("set", eventListener);
    }, []);

    return [state, setSharedState];
  }
}

module.exports = { SharedStateTarget };
