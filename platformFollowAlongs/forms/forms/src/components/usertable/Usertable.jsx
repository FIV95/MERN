// so right off the bat I need to get the state data from app.jsx to this component
// so I need to import useState from react
import React, { useState } from 'react';
// i dont need useEffect because to my understanding its only a dev tool
// i dont need to import css because im using bootstrap
// im not making any api calls
// lets make the function to create the table
const UserTable = (props) => {
    const users = props.users;
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Address</th>
                        <th>Password</th>
                        <th>Confirm Password</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.first}</td>
                                <td>{user.last}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>{user.cpassword}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default UserTable;