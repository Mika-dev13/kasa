import logo from '../assets/logo.svg'
import '../styles/Banner.css'

function Banner() {

    return (
        <header className="kasa-banner">
            <img src={logo} alt="logo du site" className='kasa-logo'></img>
            <ul className='kasa-navigation'>
                <li className='kasa-navigation-item'>
                    <a href='https://openclassrooms.com/'>Accueil</a>
                </li>
                <li className='kasa-navigation-item'>
                    <a href='https://openclassrooms.com/'>À propos</a>
                </li>
            </ul>
        </header>
    )

}

export default Banner