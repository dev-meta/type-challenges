// https://github.com/type-challenges/type-challenges/blob/main/questions/00043-easy-exclude/README.md

// Implement the built-in Exclude<T, U>

// Exclude from T those types that are assignable to U

// For example:

type X = Exclude<'a' | 'b', 'c' | 'a'>

type MyExclude<T, U> = T extends U ? never : T

type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'

export {};