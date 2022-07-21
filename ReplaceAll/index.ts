// https://github.com/type-challenges/type-challenges/blob/main/questions/00119-medium-replaceall/README.md

// Implement ReplaceAll<S, From, To> which replace the all the substring From with To in the given string S

// For example

type ReplaceAll<S extends string, From extends string, To extends string> = From extends '' ? 
    S : S extends `${infer L}${From}${infer R}` ? `${L}${To}${ReplaceAll<R, From, To>}` : S;

type replaced = ReplaceAll<'t y p e s', ' ', ''> // expected to be 'types'

export {};