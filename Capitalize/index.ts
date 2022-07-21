// https://github.com/type-challenges/type-challenges/blob/main/questions/00110-medium-capitalize/README.md

// Implement Capitalize<T> which converts the first letter of a string to uppercase and leave the rest as-is.

// For example

type Capitalize<S extends string> = S extends `${infer First}${infer Rest}` ? `${Uppercase<First>}${Rest}` : S;

type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'

export {};