import { Link } from "react-router-dom"

const NavBar=()=>{
    return <>
    <span><Link to={"/"}>Capgemini</Link></span>
    <span><Link to={"/careers"}>Careers</Link></span>
    <span><Link to={"/contact"}>Contact</Link></span>
    </>
}
export default NavBar