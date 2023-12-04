import React from "react";
import { useContext } from "react";
import MyContext from "../usercontext/usercontext";

const Form = () => {
const  { name, setName } = useContext(MyContext)

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label>Name: </label>
            <input type="text" value={name} onChange={ (e) => setName(e.target.value) } />
        </form>
    )
}

export default Form