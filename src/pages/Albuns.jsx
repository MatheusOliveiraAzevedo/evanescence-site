import "./Style.css"
import Cards from "../componentes/Cards"
import Fallen from "../images/FLL.jpeg"
import TOD from "../images/TOD.jpeg"
import TBT from "../images/TBT.jpeg"
import ABH from "../images/ABH.jpeg"
import Synthesis from "../images/SYN.jpeg"
import EV3 from "../images/EV3.jpeg"
import Origin from "../images/ORG.jpeg"




function Albuns (props) {
    
    // const [albumSelecionado2, setAlbumSelecionado2] = useState("")



    function tracks2(valor) {
        props.alterar(valor);
    }

    return (

        <div className="Albuns">
            <h1>Albuns</h1>
            <Cards alterar2={tracks2} anoLanc="2021" Gravadora="BMG" tituloAlbum="The Bitter Truth" Local={TBT} ></Cards>
            <Cards alterar2={tracks2} anoLanc="2017" Gravadora="BMG" tituloAlbum="Synthesis" Local={Synthesis} ></Cards>
            <Cards alterar2={tracks2} anoLanc="2011" Gravadora="Wind-Up Records" tituloAlbum="Evanescence" Local={EV3} ></Cards>
            <Cards alterar2={tracks2} anoLanc="2006" Gravadora="Wind-Up Records" tituloAlbum="The Open Door" Local={TOD} ></Cards>
            <Cards alterar2={tracks2} anoLanc="2004" Gravadora="Wind-Up Records" tituloAlbum="Anywhere But Home" Local={ABH} ></Cards>
            <Cards alterar2={tracks2} anoLanc="2003" Gravadora="Wind-Up Records" tituloAlbum="Fallen" Local={Fallen} ></Cards>
            <Cards alterar2={tracks2} anoLanc="2000" Gravadora="Wind-Up Records" tituloAlbum="Origin" Local={Origin} ></Cards>
        </div>
    )
}

export default Albuns