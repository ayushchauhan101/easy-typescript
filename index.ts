// Newly created type i.e 'Operation' will only accept these following strings
type Operation = "multiply" | "add" | "divide"

type ResultType = string | number

// using switch case
const calculator = (a: number, b: number, op: Operation): number => {
	switch (op) {
		case "multiply":
			return a * b
		case "add":
			return a + b
		case "divide":
			if (b === 0) {
				throw new Error("cannot divide by 0")
			}
		default:
			throw new Error("Not add, divide or multiply operation")
	}
}

console.log(calculator(1, 2, "add"))

// using if else
// const calculator = (a: number, b: number, op: Operation): ResultType => {
// 	if (op === "multiply") return a * b
// 	else if (op === "add") return a + b
// 	else if (op === "divide") {
// 		if (b === 0) return "cannot divide by 0"
// 		return a / b
// 	}
// }
