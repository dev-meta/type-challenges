// type Flatten<A extends unknown[]> = A extends [infer F, ...infer Rest]
//     ? F extends unknown[] 
//         ? [...Flatten<F>, ...Flatten<Rest>] 
//         : [F, ...Flatten<Rest>]
//     : [];

type Flatten<A extends unknown[]> = A extends [infer F, ...infer Rest]
    ? F extends unknown[] 
        ? Flatten<[...F, ...Rest]>
        : [F, ...Flatten<Rest>]
    : [];

type a = Flatten<[1,2, [3, [4,[5,6]]]]>;