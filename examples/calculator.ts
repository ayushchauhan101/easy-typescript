// Using if else
const myCalculator = (
	a: number,
	b: number,
	op: "multiply" | "add" | "divide"
): string | number => {
	if (op === "multiply") return a * b
	else if (op === "add") return a + b
	else if (op === "divide") {
		if (b === 0) return "cannot divide by 0"
		return a / b
	}
}

console.log(myCalculator(1, 2, "add"))
console.log(myCalculator(1, 4, "multiply"))
console.log(myCalculator(10, 2, "divide"))
