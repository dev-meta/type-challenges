const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

// type abc = typeof tuple;

// type TupleToObject<T extends readonly any[]> = {
//     [p in T[number]]: p
// }

type TupleToObject<Keys extends ReadonlyArray<PropertyKey>> = {
    [key in Keys[number]]: key
  }
type result = TupleToObject<typeof tuple> 
// expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}