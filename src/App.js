import React,{useState} from 'react';
import Message from './Message.js'
import './App.css'
function App() {
  let [count,setCount] = useState(0);
  let [isMorning,setMorning] = useState(true);
  return(
    <div className={`App ${isMorning ? "Morning":""}`}>
    <h1>Good {isMorning ? "Morning" : "Night"}</h1>
    <Message counter={count}/>
    <button onClick={()=>{
      setCount(++count);
    }}>Increment Counter</button>
    <button onClick={()=>{
      setMorning(!isMorning);
    }}>Negate</button>
    </div>
  )
}

export default App;
