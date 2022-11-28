/**
 * Shared State Target Class
 */
export class SharedStateTarget<S> {
  /**
   * Creates a new Shared State Target
   * @param initialState Initial value of the state
   */
  constructor(initialState: S);

  /**
   * @description Subscribes to shared state hook
   * @example
   * ```js
   *    const [count, setCount] = SHARED_COUNTER.useSharedState();
   * ```
   * For detailed examples
   * @see https://github.com/ScaleupConsulting/useSharedState-examples
   */
  useSharedState(): [S, Dispatch<SetStateAction<S>>];
}

/**
 * Shared State Target Class
 */
 export class SharedStateTarget<S = undefined> {
  /**
   * Creates a new Shared State Target
   */
  constructor();

  /**
   * @description Subscribes to shared state hook
   * @example
   * ```js
   *    const [count, setCount] = SHARED_COUNTER.useSharedState();
   * ```
   * For detailed examples
   * @see https://github.com/ScaleupConsulting/useSharedState-examples
   */
  useSharedState(): [S | undefined, Dispatch<SetStateAction<S | undefined>>];
}
