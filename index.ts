// type conditionalType = someType extends otherType ? trueType : falseType

type myCustomType<T> = T extends string[] ? string : (T extends number[] ? number: never)

const a : myCustomType<string[]> = '10'
const b : myCustomType<string[]> = '20, hello, world, !sdfs'
console.log(a)
console.log(b)
