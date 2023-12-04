import { useContext } from "react";
import MyContext from "../usercontext/usercontext";


const NavBar = () =>
{
    const { name } = useContext(MyContext)
    return (
        <>
        <li>Welcome! {name}</li>
        </>
    )
}

export default NavBar