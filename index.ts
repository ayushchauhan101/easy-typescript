// tuple
let user: [number, string]
user = [1, "adam"]
console.log(user)

// enum
enum Week {
	Sunday,
	Monday,
	Tuesday,
	Wednesday,
	Thursday,
	Friday,
}

let myDay: Week = Week.Tuesday
console.log(myDay)
let gymCloseDay: Week = Week.Friday
console.log(`The gym does not open on day ${gymCloseDay}.`)
