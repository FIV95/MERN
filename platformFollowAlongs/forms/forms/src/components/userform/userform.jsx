import React, { useState } from  'react';

const UserForm = (props) => {
    const [first, setfirst] = useState("");
    const [last, setlast] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setcpassword] = useState("");
    const [firsterror] = useState("");
    const [lasterror] = useState("");
    const [emailerror] = useState("");
    const [passworderror] = useState("");
    const [cpassworderror] = useState("");


    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        if(!first || !last || !email || !password || !cpassword) {
            alert("Please fill out all fields");
            return;
        }

        // create a javascript object to hold all of the values
        const newUser = {
            first: first,
            last: last,
            email: email,
            password: password,
            cpassword: cpassword
        };
        props.handleFormSubmit(newUser);
        console.log("Welcome", newUser);

        setfirst('');
        setlast('');
        setEmail('');
        setPassword('');
        setcpassword('');

    };

    return(
<form onSubmit={ createUser }>
    <div className='form-group mb-3'>
        <label>First Name: </label>

            <input type="text" value={first} onChange={ (e) => setfirst(e.target.value) } />
            { first.length < 3 && first.length > 0 && <p>First Name must be at least 3 characters</p>}
            { firsterror && <p>{firsterror}</p> }
    </div>
    <div className='form-group mb-3'>
        <label>Last Name: </label>
        <input type="text" value={last} onChange={ (e) => setlast(e.target.value) } />
        { last.length < 2 && last.length > 0 && <p>Last Name must be at least 2 characters</p>}

        { lasterror && <p>{lasterror}</p> }
    </div>
    <div className='form-group mb-3'>
        <label>Email Address: </label>
        <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
        { email.length < 5 && email.length > 0 && <p>Email must be at least 5 characters</p>}
        { emailerror && <p>{emailerror}</p> }
    </div>
    <div className='form-group mb-3'>
        <label>Password: </label>
        <input type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
        { password.length < 8 && password.length > 0 && <p>Password must be at least 8 characters</p>}
        { passworderror && <p>{passworderror}</p> }
    </div>
    <div className='form-group mb-3'>
        <label>Confirm Password: </label>
        <input type="text" value={cpassword} onChange={ (e) => setcpassword(e.target.value) } />
        { cpassword.length < 8 && cpassword.length > 0 && <p>Password must be at least 8 characters</p>}
        { cpassword !== password && <p>Passwords Must Match</p>}
        { cpassworderror && <p>{cpassworderror}</p> }
    </div>
    <input type="submit" value="Create User" />
</form>
    );
    };

export default UserForm;