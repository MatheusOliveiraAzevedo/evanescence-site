import { Link } from "react-router-dom"
import Navbar from "../Navbar"
import Logo from "../../images/logonova.png"
import './Cabecalho.css'
import RedesSociais from "../RedesSociais"
import iconCircle from "../../images/pngwing.png"
import { useState } from "react"
import { SlMenu  } from 'react-icons/sl'



function Cabecalho() {

    let [clickMidia, setClickMidia] = useState(false)
    let [clickMenu, setClickMenu] = useState(false)

    function menuMidia(evento) {
        setClickMidia(!clickMidia)
        // console.log(clickMidia)
    }

    function menu(evento) {
        setClickMenu(!clickMenu)
        console.log(clickMenu)

    }

    function fecharMenu(valor) {
        setClickMenu(valor)
    }


    return(

                
        <header className="cabecalho">
            <div className="cabecalhoMidia">
                <img onClick={menuMidia} className="logoCircle" src={iconCircle} alt="" />
                {clickMidia 
                    && <RedesSociais classe="containerMidias containerMidiasFlut" classe2="midias midiaFlutuante" classe3="icones iconesFlutuante"/>
                }
            </div>
            <Link className="linkLogo" to={"./"}> <img className="logoTopo" src={Logo} alt="" /> </Link>
            
            <div className="cabecalhoMenu">
                <span onClick={menu}>
                    <SlMenu size={40}/>
                </span>
                {clickMenu 
                && <div className="menuDesfoque" >
                    <Navbar closeMenu={fechar => fecharMenu(fechar)} classe="menu menuFlutuante"></Navbar>
                </div> 
                }
            </div>
        </header>
    )
}

export default Cabecalho