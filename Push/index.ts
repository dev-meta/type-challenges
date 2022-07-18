// https://github.com/type-challenges/type-challenges/blob/main/questions/03057-easy-push/README.md

// Implement the generic version of Array.push

// For example:

type Push<T extends unknown[], K> = [...T, K];

type Result = Push<[1, 2], '3'> // [1, 2, '3']

export {};
