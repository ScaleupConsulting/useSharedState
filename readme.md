# About

`useSharedState` is a simple hook that can be used to share state between multiple React components.

It relies on EventTarget, and as such is only currently supported in browsers. There is a line of code to disable it for SSR environments.

# Installation

This package can be installed using,

`npm i @scaleupconsulting/use-shared-state`

# Usage

## Creating a shared state

```js
//sharedStates.js
import { SharedStateTarget } from "@scaleupconsulting/use-shared-state";
...

//declare the state to be shared with an initial value
export const SHARED_COUNTER = new SharedStateTarget(0);

...
```

## Manipulating the state

```js
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

```js
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

## Examples

More examples can be found at [Examples](https://github.com/ScaleupConsulting/useSharedState-examples) repository.
