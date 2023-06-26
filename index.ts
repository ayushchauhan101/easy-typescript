// Type alias
type Employee = {
	readonly id: number
	name: string
	age?: number
}

let employee1: Employee = {
	id: 1234,
	name: "sarah",
}

let employee2: Employee = {
	id: 3456,
	name: "tommy",
	age: 38,
}

console.log(employee1)
console.log(employee2)

// union type
function mTokm(length: number | string): number {
	// narrowing
	if (typeof length === "number") {
		return length / 1000
	} else {
		return parseInt(length) / 1000
	}
}

console.log(mTokm(1000), "kilometer")
console.log(mTokm("8000"), "kilometer")
console.log(mTokm("50"), "kilometer")

// intersection type
type Start = {
	engineOn: boolean
	driverName: string
}

type Move = {
	startPoint: number
	endPoint: number
}

type Drive = Start & Move

let nissanCar: Drive = {
	engineOn: true,
	driverName: "jason",
	startPoint: 0,
	endPoint: 83,
}

console.log(`${nissanCar.driverName} is driving the car.`)
console.log(`The car is ${nissanCar.endPoint} km away from home.`)
