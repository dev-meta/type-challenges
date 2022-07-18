// https://github.com/type-challenges/type-challenges/blob/main/questions/00268-easy-if/README.md

// Implement a utils If which accepts condition C, a truthy return type T, and a falsy return type F. 
// C is expected to be either true or false while T and F can be any type.

// For example:

// type If<C, T, K> = C extends true ? T : C extends false ? K : never;

type If<C extends true | false, T, F> = C extends true ? T : F;


type A = If<true, 'a', 'b'>  // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'

export {};