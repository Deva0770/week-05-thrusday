function all(arr) {
	// Loop through every item in the array
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == false) {
			return false
		}
	}
	return true

}
	// If the item evaluates to false, return false

	let array1 = [true, false, false]
	let array2 = [true, true, true]

	console.log(all(array1))
	console.log(all(array2))

	// If the loop ends, return true


