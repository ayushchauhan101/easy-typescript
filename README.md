# easy-typescript

### Part5 - Type Aliases, Union and Intersection type

**Type alias:**

- Create a custom type to call later
- Always start with capital letter

```ts
type CustomType = {
	name: string
	age: number
	isAdult: boolean
}

let user1: CustomType = {
	name: "john",
	age: 47,
	isAdult: true,
}
```

- instead of defining type or set of types call the created type alias each time

**Union type:**

- To assign a type with combination of multiple types using `|` between types

```ts
let password: number | string = "ballerophone"
OR
let password: number | string = 123455
```

- here, the variable password can take either number or string type

**Type intesection**

- Variable having combination of multiple types using `&` between types

```ts
type EmployeeNumber = Employee && number
```

- here, Employee is an interface

_This is an ongoing project and the maintainer appreciate any and all input, issues, discussions as well as PR(Pull Request)_
