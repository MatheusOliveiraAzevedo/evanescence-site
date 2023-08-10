import './CardsMembros.css';


function CardsMembros (props) {

    return (
        <div className={props.class1}>
            <img src={props.foto} alt="" />
            <h2>{props.nome}</h2>
            <p>{props.posicao}</p>
        </div>
    )
}

export default CardsMembros