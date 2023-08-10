import { Link } from "react-router-dom"
import Navbar from "../Navbar"
import Logo from "../../images/logonova.png"
import './Cabecalho.css'

function Cabecalho() {

    return(

                
        <header className="cabecalho">
            <Link to={"./"}> <img className="logoTopo" src={Logo} alt="" /> </Link>
            <Navbar></Navbar>
        </header>
    )
}

export default Cabecalho