// https://github.com/type-challenges/type-challenges/blob/main/questions/00189-easy-awaited/README.md

// If we have a type which is wrapped type like Promise. How we can get a type which is inside the wrapped type?

// For example: if we have Promise<ExampleType> how to get ExampleType?

// your answers
type MyAwaited<T> = T extends Promise<infer V> ? MyAwaited<V> : T 

type ExampleType = Promise<string>

type Res = Awaited<ExampleType>

type Result = MyAwaited<ExampleType> // string

export {};