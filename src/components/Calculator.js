import React, { useState } from 'react'


const Calculator = () => {
  const [firstVal, setFirstVal] = useState(null)
  const [secondVal, setSecondVal] = useState(null)
  const [ inputValue, setInputValue] =useState(0);

  const add = (val, val2) => {
    let a = parseInt(val);
    let b =parseInt(val2)
    setInputValue(a+ b);
  };

   const substract = (val, val2) => {
    let a = parseInt(val);
    let b =parseInt(val2)
    setInputValue(a - b);
  };

  return (
    
    <div className='App'>
      <div className='form1'>
        <div className='inputDiv'>
        <input
          placeholder="first value"
          value={firstVal ? firstVal :''}
          name="firstVal"
          type='number'
          onChange={(e) => setFirstVal(e.target.value)}
        />
        <input
          placeholder="second value"
          value={secondVal ? secondVal : ''}
          name="secondVal"
          type='number'
          onChange={(e) => setSecondVal(e.target.value)}
        />
        </div>
      <div className='buttons'>
        <button onClick={() => add(firstVal,secondVal)}>+</button>
        <button onClick={() => substract(firstVal,secondVal)}>-</button>
        </div>
        <div className='resultDiv'>
        <input  className='Results' defaultValue={inputValue }/>
        </div>
        </div>
        
      </div>
      
     
  )
}

export default Calculator;
