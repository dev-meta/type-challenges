type Union = string | number | bigint;

type ToString<T extends Union> = `${T}`;

type Absolute<T extends Union> = ToString<T> extends `-${infer R}` ? R : ToString<T>

type a = Absolute<-100>;
export {};