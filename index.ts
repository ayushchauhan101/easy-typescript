function toArray<T>(input: T): Array<T> {
	return [input]
}

console.log(toArray(5))

// Partial
type User = {
	id: number
	email: string
	age?: number
	phone: number
	address?: string
}

// Partial type
type PartialUser = Partial<User>
type RequiredUser = Required<User>

const user1: PartialUser = {
	id: 342523,
	email: "hello@mail.com",
	phone: 7192131,
}
console.log(user1)

const user2: RequiredUser = {
	id: 342523,
	email: "hello@mail.com",
	age: 63,
	phone: 7192131,
	address: "42 Wallaby Way, Sydney",
}
console.log(user2)
