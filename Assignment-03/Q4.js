// Q4. Take any string with minimum 20 characters. Count number of consonant and vowel in the string.
let str = 'abcd ef ghij klmn opqrstuv'
let newStr = str.toLowerCase()
const vowels = ['a','e','i','o','u']
let vowelCount = 0
let consonantCount = 0
for(let char of newStr){
    if(vowels.includes(char)) vowelCount++
    else if(char != ' ') consonantCount++
}
console.log(`No. of Vowels are ${vowelCount} and no. of consonants are ${consonantCount}`)
