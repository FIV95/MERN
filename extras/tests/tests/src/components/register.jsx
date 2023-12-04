import { useState } from 'react'


const Registration = ({users, setUsers}) => {


const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [email, setEmail] = useState('s')

const formHandler = async =>
{
    e.preventDefault();

    const respnse = await fetch('http://localhost:8000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    }
        body: JSON.stringify({ username, password, email })
    });
}

return (
    <form>
        <label>User Name :</label>
        <input type='text' value={username} onChange={ (e) => setUsername(e.target.value)}></input>
        <label>Password :</label>
        <input type='text' value={password} onChange={ (e) => setPassword(e.target.value)}></input>
        <label>Email :</label>
        <input type='text' value={email} onChange={ (e) => setEmail(e.target.value)}></input>
        <button type='submit' onClick={formHandler}>Submit</button>
    </form>
)

}


export default Registration