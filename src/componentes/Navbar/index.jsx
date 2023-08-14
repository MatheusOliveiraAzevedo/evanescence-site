import "./Navbar.css"
import { Link } from "react-router-dom"
import { AiFillCloseCircle } from 'react-icons/ai'
import logoMenu from '../../images/logo-tod.png'

function Navbar ({ classe, closeMenu }) {

    function fechando() {
        closeMenu(false)
    }

    return(
        <nav className={classe}>
            <div>
                <img className="logoMenu" src={logoMenu} alt="" />
            </div>
            <div className="divBotaoFechar">
                <AiFillCloseCircle className="iconeFechar" size={45} onClick={fechando} />
            </div>
            <Link className="botaoNav" to={"/"}>Inicio</Link>
            <Link className="botaoNav" to={"/Sobre"}>Sobre</Link>
            <Link className="botaoNav" to={"/membros"}>Membros</Link>
            <Link className="botaoNav" to={"/albuns"}>Albuns</Link>
            <Link className="botaoNav" to={"/onde-encontrar"}>Onde Encontrar</Link>
        </nav>
    )
}

export default Navbar