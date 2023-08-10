import CardsMembros from "../componentes/CardsMembros";
import './Style.css'
import Amy from '../images/amy2.jpeg'
import Tim from '../images/tim.jpeg'
import Troy from '../images/troy.jpeg'
import Will from '../images/will.jpeg'
import Emma from '../images/emma.jpeg'


const Membros = () => {

    return(
        <section className="Membros">
            <h1>Membros da Banda</h1>
            <CardsMembros class1="CardsMembros" foto={Amy} nome="Amy Lee" posicao="Vocalista"></CardsMembros>
            <CardsMembros class1="CardsMembros" foto={Tim} nome="Tim McCord" posicao="Guitarrista"></CardsMembros>
            <CardsMembros class1="CardsMembros" foto={Troy} nome="Troy McLawhorn" posicao="Guitarrista"></CardsMembros>
            <CardsMembros class1="CardsMembros" foto={Will} nome="Will Hunt" posicao="Baterista"></CardsMembros>
            <CardsMembros class1="CardsMembros" foto={Emma} nome="Emma Anzai" posicao="Baixista"></CardsMembros>
        </section>
    )
}

export default Membros;