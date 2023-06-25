# easy-typescript

### Part5 - Functions and Objects

- Syntax :

```ts
function funtion-name (argument-name: type) : return type {
    return
}
```

- to give a default value to an argument use the `=` operator
- indentation instead of `{}` are also valid _similar to python_

**conventional:**

```ts
function greet(name: string) {
	if (name === "adam") {
		return "access granted"
	}
	return "access denied"
}
```

**using indentation:**

```ts
function greet(name: string) {
	if (name === "adam") return "access granted"
	return "access denied"
}
```

_This is an ongoing project and the maintainer appreciate any and all input, issues, discussions as well as PR(Pull Request)_
