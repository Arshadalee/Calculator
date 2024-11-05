import './App.css';

import {React,useState} from 'react';

function App() {
  const[number1,setNumber1]=useState();
  const[number2,setNumber2]=useState();
  const[total,setTotal]=useState(0);

  function CalTotal(){
    setTotal(number1+number2);
  }
  const Substraction =()=>setTotal(number1-number2);
const Division =()=>setTotal(number1/number2);
const Multiply =()=>setTotal(number1*number2);

  return (
   <>
    <center ><div className="mainDiv">
    <h1 className="calculater">Calculater</h1>
    <input placeholder='Enter the Number 1'
    type="number" Value={number1} onChange={(e)=>setNumber1(+e.target.value)}/>

<input placeholder='Enter the Number 2'
    type="number" Value={number2} onChange={(e)=>setNumber2(+e.target.value)}/>
  <div className='Sapace'>

  </div>
<button onClick={CalTotal}>Addition</button>
<button onClick={Substraction}>Substraction</button>
<button onClick={Division}>Division</button>
<button onClick={Multiply}>Multiply</button>
<h2>Total Value {total}</h2>
    </div>
</center>
   </>
  );
}

export default App;
