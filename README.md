# easy-typescript

### Part3 - Tuples and Enums

**Tuple:**

- Store multiple fields of different types.

```ts
const myTuple: [string, number] = ["hello", 18]
```

**Enum:**

- Allow you to define a set of named constants.
- Enumerates and gives increment value to each subsequent element.

```ts
enum Size {
	Small,
	Medium,
	Large,
	ExtraLarge,
}
```

- Typescript assigns a number value to each just like in an array like, Small = 0, Medium = 1 and so on.
- Call the enum type to later assign any chosen element from the enum

```ts
let shoeSize: Size = Size.Large
```

- shoeSize will be given a value of 2
- other value can be assigned to the enum elements but it must be mentioned for each one

```ts
enum Size {
	Small = "s",
	Medium = "m",
	Large = "l",
	ExtraLarge = "xl",
}
```

_This is an ongoing project and the maintainer appreciate any and all input, issues, discussions as well as PR(Pull Request)_
