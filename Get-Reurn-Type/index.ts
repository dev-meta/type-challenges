// https://github.com/type-challenges/type-challenges/blob/main/questions/00002-medium-return-type/README.md

// Implement the built-in ReturnType<T> generic without using it.

// For example

const fn = (v: boolean) => {
  if (v)
    return 1
  else
    return 2
}

type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer P ? P : never;

type a = MyReturnType<typeof fn> // should be "1 | 2"


type B = ReturnType<() => boolean>;

// 官方实现
// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

export {};