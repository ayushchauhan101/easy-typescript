// process.argv[] prints the element from command line arguments array

if (process.argv.length > 4) {
	console.log("Too many arguments")
} else if (!Number(process.argv[2]) || !Number(process.argv[3])) {
	console.log("Wrong data type; not a number")
} else {
	console.log("Beginning calculator")
}

function multiplicator(a: number, b: number, printText: string) {
	console.log(printText, a * b)
}

const a: number = Number(process.argv[2])
const b: number = Number(process.argv[3])

multiplicator(a, b, `Multiplied ${a} and ${b}, the result is:`)

// commands:
// npm run multiply 5 2
// npm run multiply 5 10
// npm run multiply 5 'hello'
