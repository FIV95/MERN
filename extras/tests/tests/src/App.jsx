import { useState } from 'react'
import './App.css'
import Registration from './components/register'

function App() {

  const [users, setUsers] = useState([])

  return (
    <>
    <Registration users={users} setUsers={setUsers}/>
    </>
  )
}

export default App
