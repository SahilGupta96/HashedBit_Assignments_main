/*  Write a function to replace wrong word with correct word in any sentence.
Like this - correctfn(string, wrong, correct)
Use string.replace in function. */

const correctFunc = (string, wrong, correct)=>{
    return string.replace(wrong,correct)
}
console.log(correctFunc('Hi, My name is Akshay','Hi','Hello'))
