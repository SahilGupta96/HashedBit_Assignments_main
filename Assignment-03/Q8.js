/* Write a function to find repeated sum of digits until there is only a single digit in the number.
Example - 456 - 4+5+6 = 15 - 1+5 = 6. */

const sumOfDigits = (num)=>{
    while(num >9){
        let sum=0
        while(num>0){
            let digits = num%10
            sum+=digits
            num = Math.floor(num/10)
        }
        num = sum
    }
    return num
}
console.log(sumOfDigits(456));
