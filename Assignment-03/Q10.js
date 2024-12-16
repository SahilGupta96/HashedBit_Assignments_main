/* Write a function to reverse a string.
Input - Hello
Outpur - olleH */

const reverseString = (str)=>{
    const char = str.split('')
    const reverseArr = char.reverse()
    return reverseArr.join('')
}
console.log(reverseString('Hello6'));
