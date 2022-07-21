// Type the function PromiseAll that accepts an array of PromiseLike objects,
// the returning value should be Promise<T> where T is the resolved result array.

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

declare function PromiseAll<T extends unknown[]>(
    values: [...T]
): Promise<{
    [key in keyof T]: T[key] extends Promise<infer R> ? R : T[key];
}>;

// expected to be `Promise<[number, 42, string]>`
const p = Promise.all([promise1, promise2, promise3] as const);

interface Cat {
    type: 'cat';
    breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal';
}

interface Dog {
    type: 'dog';
    breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer';
    color: 'brown' | 'white' | 'black';
}
type LookUp<T, K> = T extends {type: K} ? T : never;
type MyDogType = LookUp<Cat | Dog, 'dog'>; // expected to be `Dog`

export {};


