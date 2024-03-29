// https://github.com/type-challenges/type-challenges/blob/main/questions/00009-medium-deep-readonly/README.md

// Implement a generic DeepReadonly<T> which make every parameter of an object - and its sub-objects recursively - readonly.

// You can assume that we are only dealing with Objects in this challenge. 
// Arrays, Functions, Classes and so on are no need to take into consideration. 
// However, you can still challenge your self by covering different cases as many as possible.

// For example

type X = { 
  x: { 
    a: 1
    b: 'hi'
  }
  y: 'hey'
}

type Expected = { 
  readonly x: { 
    readonly a: 1
    readonly b: 'hi'
  }
  readonly y: 'hey' 
}

type DeepReadonly<T> = {
    [key in keyof T]: T[key] extends never ? T[key] : DeepReadonly<T[key]>
}

type Todo = DeepReadonly<X> // should be same as `Expected`

export {};