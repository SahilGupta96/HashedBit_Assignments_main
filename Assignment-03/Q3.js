/* let string = 'INDIA'
output = 'INDONESIA'
Use array.splice */

let string = 'INDIA'
let arr = string.split('')
arr.splice(3,2,'O','N','E','S','I','A')
let newStr = arr.join('')
console.log(newStr)
