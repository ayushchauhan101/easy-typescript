# easy-typescript

### Part3 - types

#### All typescript types:

- number
- string
- boolean
- null
- undefined
- object
- any
- unkown
- neven
- enum
- tuple

---

- Decalre a type to a variable using '`:`'

```ts
let phone_number: number = 830012377493
let myName: string = "victor strange"
```

- Typescript assumes any type if the variable is not specified.
- Type checking is the major feature that comes with typescript; implicitly undefined types raises error

```ts
function greet(args) {
	console.log(args)
}
```

- Leaving the argument `args` raises warning via typescript; better to explicitly mention a type like :

```ts
function greet(args: any) {
	console.log(args)
}
```

- This removes any warnings and the function works again

---

- To create an array use `[]` to specify em empty array after a type

```ts
let newArray: number[] = [1, 2, 2, 3, 5]
OR
let letterArray: string[] = ["a", "b", "hello"]
```

_This is an ongoing project and the maintainer appreciate any and all input, issues, discussions as well as PR(Pull Request)_
