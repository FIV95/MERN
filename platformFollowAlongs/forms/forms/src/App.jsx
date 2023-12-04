import { useEffect, useState } from 'react'
import UserForm from './components/userform/userform';
import 'bootstrap/dist/css/bootstrap.min.css';
import Usertable from './components/usertable/Usertable';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log(users);
  }, [users]);

  const updateUsersState = (user) =>{
    setUsers([...users, user]);
  };


  return (
    <>
  <UserForm handleFormSubmit={updateUsersState}/>
  <Usertable users={users}/>
    </>
  )
}

export default App
