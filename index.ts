function isProfit(income: number, expense: number): string {
	if (expense > income) return "at a loss"
	return "at a profit"
}

console.log(isProfit(1000, 800))
console.log(isProfit(1000, 1800))


function calculateTax(income:number, taxYear = 2022): number{
	if (taxYear < 2022)
		return income * 1.2
	return income * 1.5
}

console.log(calculateTax(2021))