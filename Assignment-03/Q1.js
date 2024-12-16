/* Q1. Create an array of states in india.
Remove all the names starting with vowels from the list. Use array.filter. */

const states = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttarakhand','West Bengal']

let newStates = states.filter(state=>{
    return !['A','E','I','O','U'].includes(state[0].toUpperCase())
})
console.log(newStates)
