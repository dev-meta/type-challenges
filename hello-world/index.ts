type HelloWorld = string;
// 你需要使得如下这行不会抛出异常
type test = Expect<Equal<HelloWorld, string>>;

let str: test = '124';