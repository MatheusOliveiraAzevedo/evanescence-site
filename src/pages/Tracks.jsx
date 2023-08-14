import React, { useState } from 'react'
import './Style.css'
import Fallen from "../images/FLL.jpeg"
import TOD from "../images/TOD.jpeg"
import TBT from "../images/TBT.jpeg"
import ABH from "../images/ABH.jpeg"
import Synthesis from "../images/SYN.jpeg"
import EV3 from "../images/EV3.jpeg"
import Origin from "../images/ORG.jpeg"
import { Link } from 'react-router-dom'

const Tracks = (props) => {

    let [faixa, setFaixa] = useState([])
    let [imgAlbum, setImgAlbum] = useState("")

    const faixas1 = [
        "Artifact/The Turn",
        "Broken Pieces Shine",
        "The Game Is Over",
        "Yeah Right",
        "Feeding the Dark",
        "Wasted on You",
        "Better Without You" ,
        "Use My Voice",
        "Take Cover",
        "Far from Heaven",
        "Part of Me",
        "Blind Belief"
     ]

     const faixas2 = [
        "Going Under",
        "Bring Me To Life",
        "Everybody's Fool",
        "My Immortal",
        "Haunted",
        "Tourniquet",
        "Imaginary",
        "Taking Over Me",
        "Hello",
        "My Last Breath",
        "Whisper",
        "My Immortal (Verson Band)"
     ]

     const faixas3 = [
        "What You Whant",
        "Made of Stone",
        "The Change",
        "My Heart is Broken",
        "The Oder Side",
        "Erase This",
        "Lost in Paradise",
        "Sick",
        "End of the Dream",
        "Oceans",
        "Never Go Back",
        "Swimming Home"
     ]

     const faixas4 = [
        "Sweet Sacrifice",
        "Call Me When You're Sober",
        "Weight of the World",
        "Lithium",
        "Cloud Nine",
        "Snow White Queen",
        "Lacrymosa",
        "Like You",
        "Lose Control",
        "The Only One",
        "Your Start",
        "All That I'm Living For",
        "Good Enough"
     ]

     const faixas5 = [
        "Origin",
        "Whisper",
        "Imaginary",
        "My Immortal",
        "Where Will You Go",
        "Field of Innocence",
        "Even in Death",
        "Anywhere",
        "Lies",
        "Away from Me",
        "Eternal"
     ]

     const faixas6 = [
        "Overture",
        "Never Go Back",
        "Hi-Lo",
        "My Heart Is Broken",
        "Lacrymosa",
        "The End of the Dream",
        "Bring Me to Life",
        "Unraveling",
        "Imaginary",
        "Secret Door",
        "Lithium",
        "Lost in Paradise",
        "Your Star",
        "My Immortal",
        "The In-Between",
        "Imperfection"
     ]
         
     const faixas7 = [
        "Haunted",
        "Going Under",
        "Taking Over Me",
        "Everybody's Fool",
        "Thoughtless",
        "My Last Breath",
        "Farther Away",
        "Breath No More",
        "My Immortal",
        "Bring Me to Life",
        "Tourniquet",
        "Imaginary",
        "Whisper",
        "Missing"
    ]
            
         
         
         function letras() {
             if (props.trackAlbum === "The Bitter Truth") {
                 setFaixa(faixas1)
                 setImgAlbum(TBT)
                } else if (props.trackAlbum === "Fallen") {
                    setFaixa(faixas2)
                    setImgAlbum(Fallen)
                } else if (props.trackAlbum === "Evanescence") {
                    setFaixa(faixas3)
                    setImgAlbum(EV3)
                } else if (props.trackAlbum === "The Open Door") {
                    setFaixa(faixas4)
                    setImgAlbum(TOD)
                } else if (props.trackAlbum === "Origin") {
                    setFaixa(faixas5)
                    setImgAlbum(Origin)
                } else if (props.trackAlbum === "Synthesis") {
                    setFaixa(faixas6)
                    setImgAlbum(Synthesis)
                } else if (props.trackAlbum === "Anywhere But Home") {
                    setFaixa(faixas7)
                    setImgAlbum(ABH)
                }
            }
            
        React.useEffect(() => {
                letras();
        },);

        return (
        <div className='Track'>
            <h1>{ props.trackAlbum }</h1>
            <img src={imgAlbum} alt="" />
            <ul>
                { faixa.map( (faixa, index) => <li key={index}> {(index + 1) + " - " + faixa} </li>)}
            </ul>
            <Link className='linkVoltar' to={"/albuns"}>
                <button class="custom-btn btn-1">Voltar</button>
            </Link>
        </div>
    )
}

export default Tracks;