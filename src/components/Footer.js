import logoWhite from '../assets/logoWhite.svg'
import '../styles/Footer.css'

export default function Footer() {

    return (
        <div className='kasa-footer-container'>
            <img src={logoWhite} alt="logo du site" className='kasa-logo'></img>
            <p>©️ 2020 Kasa. All rigths reserved</p>
        </div>
    )
}