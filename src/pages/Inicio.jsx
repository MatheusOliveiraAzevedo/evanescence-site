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
            <RedesSociais></RedesSociais>
            <Rodape></Rodape>
        </div>
    )
}

export default Inicio