import { Outlet } from "react-router-dom"
import Cabecalho from "../componentes/Cabecalho"
import Rodape from "../componentes/Rodape"
import './Style.css'
import RedesSociais from "../componentes/RedesSociais"


function Inicio () {

    return (

        <div className="paginaCompleta">
            <Cabecalho></Cabecalho>
            <Outlet></Outlet>
            <RedesSociais classe="containerMidias" classe2="midias" classe3="icones"></RedesSociais>
            <Rodape></Rodape>
        </div>
    )
}

export default Inicio