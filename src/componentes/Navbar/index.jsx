import "./Navbar.css"
import { Link } from "react-router-dom"


function Navbar () {

    return(
        <nav className="menu">
            <Link className="botaoNav" to={"/"}>Inicio</Link>
            <Link className="botaoNav" to={"/Sobre"}>Sobre</Link>
            <Link className="botaoNav" to={"/membros"}>Membros</Link>
            <Link className="botaoNav" to={"/albuns"}>Albuns</Link>
            <Link className="botaoNav" to={"/onde-encontrar"}>Onde Encontrar</Link>
        </nav>
    )
}

export default Navbar