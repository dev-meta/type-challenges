


type Fn = (a: number, b: string) => number


type AppendArgument<F extends (...args: any[]) => any, P> = 
    F extends (...args: infer Args) => infer R 
        ? (...args: [...Args, P]) => R 
        : never;
type Result = AppendArgument<Fn, boolean> 
// expected be (a: number, b: string, x: boolean) => number


export {};