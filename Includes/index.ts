// https://github.com/type-challenges/type-challenges/blob/main/questions/00898-easy-includes/README.md

// Implement the JavaScript Array.includes function in the type system. 
// A type takes the two arguments. The output should be a boolean true or false.

// For example:

type Includes<T extends unknown[], K> = K extends T[keyof T] ? true : false;

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`

export {};