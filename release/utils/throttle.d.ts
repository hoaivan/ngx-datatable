/**
 * Throttle a function
<<<<<<< HEAD
 *
 * @export
 * @param {*} func
 * @param {number} wait
 * @param {*} [options]
 * @returns
 */
export declare function throttle(func: any, wait: number, options?: any): () => any;
=======
 */
export declare function throttle(func: any, wait: number, options?: any): (this: any) => any;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
/**
 * Throttle decorator
 *
 *  class MyClass {
 *    throttleable(10)
 *    myFn() { ... }
 *  }
<<<<<<< HEAD
 *
 * @export
 * @param {number} duration
 * @param {*} [options]
 * @returns
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
 */
export declare function throttleable(duration: number, options?: any): (target: any, key: PropertyKey, descriptor: PropertyDescriptor) => {
    configurable: boolean;
    enumerable: boolean;
    get: () => any;
};
