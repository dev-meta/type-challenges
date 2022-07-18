// https://github.com/type-challenges/type-challenges/blob/main/questions/00533-easy-concat/README.md

// Implement the JavaScript Array.concat function in the type system. A type takes the two arguments. 
// The output should be a new array that includes inputs in ltr order

// For example:


type Concat<T extends unknown[], K extends unknown[]> = [...T, ...K]

type Result = Concat<[1], [2]> // expected to be [1, 2]

export {};