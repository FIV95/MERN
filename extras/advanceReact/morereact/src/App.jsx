import { useEffect, useState } from 'react'
import './App.css'

function App() {
const [count, setCount] = useState(0)
const [name, setName] = useState('');
const [time, setTime] = useState(new Date().toLocaleDateString());

useEffect(() => {
  const timer = setInterval(() => {
    setTime(new Date().toLocaleDateString());
  }, 1000);
  return () => {
    clearInterval(timer);
  };
}, []);


return (
<div className="App">
  <p>You clicked {count} times</p>
  <button onClick={() => setCount(count + 1)}>
    Click Me
    </button>
      <input onChange={(event) => setName(event.target.value)}placeholder = "please enter your name" />
    <p>{name}</p>
    <p>{time}</p>
    </div>
)
}

export default App
