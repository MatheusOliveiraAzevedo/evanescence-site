import './Cards.css'
import { Link } from 'react-router-dom';


const Cards = (props) => {
    const album = props.tituloAlbum;
    const img = props.Local

    function infoTrack () {
        props.alterar2(album)
    }


    return(
        <Link onClick={infoTrack} className='linkCard' to={{ pathname: '/tracks', state: { album: album } }}>
            <section className="cardBorda">
                <section className='Card'>
                    <img src={props.Local} alt="" />
                    <h2>{props.tituloAlbum}</h2>
                    <div>
                        <p>{props.anoLanc}</p>
                        <p>{props.Gravadora}</p>
                    </div>
                </section>
            </section>
        </Link>
    )
}

export default Cards;