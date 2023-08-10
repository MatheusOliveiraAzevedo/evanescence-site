import './Rodape.css'
import logoRodape from '../../images/logo-rodape.png'

const Rodape = () => {

    return(
        <footer className='rodape'>
            <img src={logoRodape} alt="" />
            <p>© 2023 Evanescence. All Rights Reserved. Privacy Policy.</p>
        </footer>
    )
}

export default Rodape;