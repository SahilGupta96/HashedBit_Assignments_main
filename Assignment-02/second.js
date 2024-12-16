//Q2. Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.

const calculateFunc = (first, second, operator)=>{
    switch(operator){
        case '+' :
            return first+second
        case '-' :
            return first-second
        case '*' :
            return first*second
        case '/' :
            return first/second
    }
}
console.log(calculateFunc(10,20,'+'));
console.log(calculateFunc(10,20,'-'));
console.log(calculateFunc(10,20,'*'));
console.log(calculateFunc(10,20,'/'));
