// https://github.com/type-challenges/type-challenges/blob/main/questions/00003-medium-omit/README.md


// Implement the built-in Omit<T, K> generic without using it.

// Constructs a type by picking all properties from T and then removing K

// For example

interface Todo {
  title: string
  description: string
  completed: boolean
}

// type MyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

type MyOmit<T, K extends keyof T> = {
    [key in Exclude<keyof T, K>]: T[key]
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}


type A = Omit<{a: number, b: string}, 'a' | 'c'>;

// 官方实现
// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

export {};