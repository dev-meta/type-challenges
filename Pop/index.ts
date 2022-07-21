// https://github.com/type-challenges/type-challenges/blob/main/questions/00016-medium-pop/README.md

// Implement a generic Pop<T> that takes an Array T and returns an Array without it's last element.

// For example

type arr1 = ['a', 'b', 'c', 'd']
type arr2 = [3, 2, 1]

type Pop<T extends unknown[]> = T extends [...infer Rest, infer F] ? [...Rest] : never;


type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2> // expected to be [3, 2]

type Shift<T extends unknown[]> = T extends [infer F, ...infer Rest] ? [...Rest] : never;

type re3 = Shift<arr1>

// Extra: Similarly, can you implement Shift, Push and Unshift as well?

export {};

