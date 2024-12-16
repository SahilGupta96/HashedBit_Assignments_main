import React, { useState } from 'react'
import './calculator.css'
const Calculator = () => {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [result, setResult] = useState(null)
  function validInputs(){
    if(num1=='' && num2==''){
      setResult('Enter numbers')
      return false
    }
    else if(num1=='' || num2==''){
      setResult('Enter other number')
      return false
    }
    return true
  }
  function handleAdd(){
    if(validInputs()){
      setResult(Number(num1) + Number(num2))
    }
  }
  function handleSubtract(){
    if(validInputs()){
      setResult(Number(num1) - Number(num2))
    }
  }
  function handleMul(){
    if(validInputs()){
      setResult(Number(num1) * Number(num2))
    }
  }
  function handleDivide(){
    if(validInputs()){
      if(Number(num2)==0){
        setResult('Cannot divide by zero')
      }
      else{
        setResult((Number(num1) / Number(num2)))
      }
    }
  }
  return (
    <div className='container'>
      <h2>Calculator</h2>
      <div className='first-input'>
        <input type="text" placeholder='Enter first number' value={num1} onChange={(e)=>setNum1(e.target.value)}/>
      </div>
      <div className="second-input">
        <input type="text" placeholder='Enter second number' value={num2} onChange={(e)=>setNum2(e.target.value)}/>
      </div>
      <div className="operators">
        <button className="add" onClick={handleAdd}>+</button>
        <button className="subtract" onClick={handleSubtract}>-</button>
        <button className="multiply" onClick={handleMul}>x</button>
        <button className="divide" onClick={handleDivide}>÷</button>
      </div>
      <div className="answer">
        <h2>Equals : {result == null ? 'No calculation yet ' : result} </h2>
      </div>
    </div>
  )
}

export default Calculator

