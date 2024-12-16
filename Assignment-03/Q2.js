/* let str = 'I love my India'
output expected = 'India my love I'
Write code for this.*/

let str = 'I love my India'

//Step 1 : Split the string into array of words
let words = str.split(' ')

//Step 2 : reverse the array
let reverseArray = words.reverse()

//Step 3 : Join reverseArray into a string
let reverseStr = reverseArray.join(' ')
console.log(reverseStr)
