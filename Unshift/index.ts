// https://github.com/type-challenges/type-challenges/blob/main/questions/03060-easy-unshift/README.md

// Implement the type version of Array.unshift

// For example:

type Unshift<T extends unknown[], K> = [K, ...T];

type Result = Unshift<[1, 2], 0> // [0, 1, 2,]


export {};