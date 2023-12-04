import { useState } from 'react'
import './App.css'
import MyContext from './components/usercontext/usercontext';
import NavBar from './components/navbar/navbar';
import FormWrapper from './components/formwrapper/formwrapper';
import Wrapper from './components/wrapper/wrapper';
function App() {

  const [name, setName] = useState('User');

  return (
    <MyContext.Provider value={{name, setName}} >
    <div>
      <Wrapper/>
      App Component
    </div>
    </MyContext.Provider>
  )
}

export default App
