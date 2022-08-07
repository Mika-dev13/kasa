import '../About/About.css'
import Collaspe from '../../components/Collaspe'
import Footer from '../../components/Footer'

function About() {

    return (
        <div>
            <div className='collaspe-container'>
                <div className='kasa-about-img'></div>
                <div className='kasa-about-collaspes-container'>
                    <Collaspe title="Fiabilité" taille="large"> 
                        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
                    </Collaspe>
                    <Collaspe title="Respect" taille="large" className="collaspe_large">  
                        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>             
                    </Collaspe>
                    <Collaspe title="Service" taille="large"> 
                        <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>              
                    </Collaspe>
                    <Collaspe title="Sécurité" taille="large">
                        <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>               
                    </Collaspe>
                </div>
            </div>
            <Footer />
        </div>
        
    )
}

export default About