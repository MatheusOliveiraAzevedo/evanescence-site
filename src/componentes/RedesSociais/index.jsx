import './RedesSociais.css'
import instagram from '../../images/icones/instagram.png'
import twitter from '../../images/icones/twitter.png'
import youtube from '../../images/icones/youtube.png'
import applemusic from '../../images/icones/music.png'
import deezer from '../../images/icones/deezer.png'
import spotify from '../../images/icones/spotify.png'


function RedesSociais ({ classe, classe2, classe3 }) {

    return (
        <div className={classe}>
            <ul className={classe2}>
                <li className={classe3}><a href="https://www.instagram.com/evanescenceofficial/"><img src={instagram} alt="" /></a></li>
                <li className={classe3}><a href="https://twitter.com/evanescence"><img src={twitter} alt="" /></a></li>
                <li className={classe3}><a href="https://www.youtube.com/c/evanescence/featured"><img src={youtube} alt="" /></a></li>
                <li className={classe3}><a href="https://deezer.page.link/iGhnkskotxgh3pxY7"><img src={deezer} alt="" /></a></li>
                <li className={classe3}><a href="https://music.apple.com/br/artist/evanescence/42102393"><img src={applemusic} alt="" /></a></li>
                <li className={classe3}><a href="https://open.spotify.com/artist/5nGIFgo0shDenQYSE0Sn7c"><img src={spotify} alt="" /></a></li>
            </ul>
        </div>
    )
}

export default RedesSociais