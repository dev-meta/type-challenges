// https://github.com/type-challenges/type-challenges/blob/main/questions/00010-medium-tuple-to-union/README.md

// Implement a generic TupleToUnion<T> which covers the values of a tuple to its values union.

// For example

type Arr = ['1', '2', '3']

type TupleToUnion<T extends any[]> = T[number]

type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'

export {};