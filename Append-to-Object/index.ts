type Test = { id: '1' }

type AppendToObject<T extends {[key: string]: any}, K extends keyof any, V> = 
    {
        [key in keyof T | K]: key extends keyof T ? T[key] : V
    }
type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }

export {};