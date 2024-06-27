const arr = [1,2,3,4,5,6] // array of numbers 

const arr2 = new Array(1,2,3,4,5,6) // another way to create an array of numbers


// array methods

// arr.push(7,8) // add element to the end of the array 
// console.log(arr)

// arr.pop() // remove element from the end of the array
// console.log(arr)

// arr.unshift(74) //  add element to the beginning of the array 
// console.log(arr)

// arr.shift() // remove element from the beginning of the array
// console.log(arr)

// console.log(arr.includes(3)) // check if the array includes the element it returns true or false 
// let arr1 = arr.includes(3) // another way to check if the array includes the element it returns true or false 
// console.log(arr1)

// console.log(arr.indexOf(3)) // returns the index of the element in the array if it exists otherwise it returns -1

// const newArr = arr.join() // converts the array to a string with a comma separator
// console.log(newArr)
// console.log(typeof newArr) // string  "1,2,3,4,5,6"
// console.log(arr) // array   [1,2,3,4,5,6]

// const newAr1 = arr.slice(1, 3) // returns a new array with the elements from the start index to the end index not including the end index 
// console.log(newAr1) // [2,3]
// console.log(arr) // [1,2,3,4,5,6]


// splice(start, optional delete count, optional items to add) <--- syntax
// const newAr2 = arr.splice(1, 3) // Unlike the slice() method, the splice() method will change the contents of the original array. The splice() method is used to add or remove elements of an existing array and the return value will be the removed items from the array.
// console.log(newAr2) // [2,3,4]
// console.log(arr) // [1,5,6] // the original array has been changed 

// const newAr3 = arr.splice()
// console.log(newAr3) // [] if no arguments are passed to the splice method it will return an empty array
// console.log(arr) // [1,2,3,4,5,6]

// const newAr4 = arr.splice(1, 3, 7, 8, 9) // the first argument is the start index, the second argument is the number of elements to remove, the rest of the arguments are the elements to add to the array
// console.log(newAr4) // [2,3,4]
// console.log(arr) // [1,7,8,9,5,6] // the original array has been changed first 3 elements have been removed and 7,8,9 have been added to the array and the rest of the elements have been shifted to the right

const newArr = arr.concat([7, 8, 9]); // Returns a new array that is the result of concatenating the calling array with one or more arrays. 
console.log(newArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]