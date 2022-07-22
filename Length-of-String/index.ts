type LengthofString<S extends string, Chars extends string[] = []> = 
    S extends `${infer First}${infer Rest}` ? LengthofString<Rest, [...Chars, First]> : Chars['length']

type a = LengthofString<'adc'>


export {};