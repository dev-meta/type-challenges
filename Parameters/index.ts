// https://github.com/type-challenges/type-challenges/blob/main/questions/03312-easy-parameters/README.md

// Implement the built-in Parameters generic without using it.

// For example:

const foo = (arg1: string, arg2: number): void => {}

type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer F) => any ? F : never;

// type MyParameters<T extends (...args: any[]) => any> =
//   T extends (...args: infer Args) => any
//     ? Args
//     : []

type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]

type XX = MyParameters<() => void>;

type M = Parameters<() => void>

// 官方实现
// type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

export {};