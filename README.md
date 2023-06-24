# easy-typescript

### Part2 - Generics

### This branch contains introduction to Typescript generics and it's examples:

_Generics_ allow you to create components that can be reused across the codebase and work with a variety of types.

**Run the program:**

```
npx tsc <file-name>.ts
OR
npm run start
```

### Examples and explanations

- Creating a function and using **Generics** to define the argument

```ts
function toArray<T>(input: T): Array<T> {
	return [input]
}
--OR--
function toArray<T>(input: T): [T] {
	return [input]
}
```

- This function converts any argument into an array
- The return type is expected to be an Array
- Using a single letter T to denote the type
- The function receives an argument of type T and returns the argument of type T
- The type can be named anything but using a single letter is a common practice

---

## Partial & Required

- Takes generic names T and transforms each property of a custom type into optional property

- forces each property to accept undefined type as well

```ts
type User = {
	id: number
	email: string
	age: number
}
type PartialUser = Partial<User>
```

- Here, a new type PartialUser is similar to User but sets id, email and age into optional property
- it will accept string as well as undefined type i.e. string | undefined

- **Required** is the opposite of Partial and forces even the optional property into required property that must never be left empty
- Typescript will tell if any of the property is left undefined while using Required
- use '?' after type to convert into optional type

_This is an ongoing project and the maintainer appreciate any and all input, issues, discussions as well as PR(Pull Request)_
