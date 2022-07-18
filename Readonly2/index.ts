// https://github.com/type-challenges/type-challenges/blob/main/questions/00008-medium-readonly-2/README.md

// Implement a generic MyReadonly2<T, K> which takes two type argument T and K.

// K specify the set of properties of T that should set to Readonly. When K is not provided, it should make all properties readonly just like the normal Readonly<T>.

// For example

interface Todo {
  title: string
  description: string
  completed: boolean
}

// type MyReadonly2<T, K extends keyof T = keyof T> = K extends keyof T ? {
//   readonly [key in K]: T[key]
// } & {
//   [key in Exclude<keyof T, K>]: T[key]
// } : Readonly<T>

type MyReadonly2<T, Keys extends keyof T = keyof T> =  {
  readonly [key in Keys]: T[key]
} & Omit<T, Keys>

const todo: MyReadonly2<Todo> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

// todo.title = "Hello" // Error: cannot reassign a readonly property
// todo.description = "barFoo" // Error: cannot reassign a readonly property
// todo.completed = true // OK


export {};
