# About this package

<a href="https://www.npmjs.com/package/@scaleup-consulting/use-shared-state"><img src="https://img.shields.io/npm/v/@scaleup-consulting/use-shared-state" alt="npm-badge"/></a>

`useSharedState` is a simple hook that can be used to share state between multiple React components.

It relies on [`EventTarget`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget), and as such is only currently supported in browsers. There is a line of code to disable it for SSR environments.

# Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Creating a shared state](#creating-a-shared-state)
  - [Manipulating the state](#manipulating-the-state)
  - [Using the state](#using-the-state)
- [Best Practices](#best-practices)
- [Examples](#examples)

# Installation

This package can be installed via npm, using :

`npm i @scaleup-consulting/use-shared-state`

# Usage

## Creating a shared state

Creating a shared state hook is no different than creating a simple react hook:

```js
//sharedStates.js
import { SharedStateTarget } from "@scaleup-consulting/use-shared-state";
...

//declare the shared state with an initial value
export const SHARED_COUNTER = new SharedStateTarget(0);

...
```

## Manipulating the state

To use and manipulate the shared state function similar to react hook syntax:

```jsx
const [state, setState] = SHARED_STATE_NAME.useSharedState();
```

Usage in counter example:

```jsx
//CounterButtons.jsx
...
import {SHARED_COUNTER} from "./sharedStates"

...


export function CounterButtons() {
  //get shared state and it's setter
  const [count, setCount] = SHARED_COUNTER.useSharedState();

  //use setter function to change the state's value
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

...
```

## Using the state

You can also subscribe to state's updates without using the setter function with

```jsx
const [state] = SHARED_STATE_NAME.useSharedState();
```

Usage in counter example:

```jsx
//Counter.jsx
...
import {SHARED_COUNTER} from "./sharedStates"

...

export function Counter() {
    //use shared state without setter
    const [count] = SHARED_COUNTER.useSharedState();

    //display state
    return <span>{count}</span>;
}

...

```

# Best Practices

- To make the Shared State easier to debug, there should be only <span style="color:#FA2D48">one</span> component responsible for setting the state.

# Examples

More examples can be found at [useSharedState-examples](https://github.com/ScaleupConsulting/useSharedState-examples) repository.
