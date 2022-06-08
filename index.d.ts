/**
 * Shared State Target Class
 */
export class SharedStateTarget {
  /**
   * Creates a new Shared State Target
   * @param initialStateOfNewComponents Initial value of the state
   */
  constructor(initialStateOfNewComponents: any);

  initialStateOfNewComponents: any;
  /**
   * @description Subscribes to shared state hook
   * @example
   * ```js
   *    const [count, setCount] = SHARED_COUNTER.useSharedState();
   * ```
   * For detailed examples
   * @see https://github.com/ScaleupConsulting/useSharedState-examples
   */
  useSharedState(): [any, (detail: any) => any];
}
//# sourceMappingURL=index.d.ts.map
