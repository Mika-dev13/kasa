import '../About/About.css'
import Collaspe from '../../components/Collaspe'
import Footer from '../../components/Footer'

function About() {

    return (
        <div>
            <div className='container'>
                <div className='kasa-about-img'></div>
                <div className='kasa-about-collaspes-container'>
                    <Collaspe title="Fiabilité">               
                    </Collaspe>
                    <Collaspe title="Respect">               
                    </Collaspe>
                    <Collaspe title="Service">               
                    </Collaspe>
                    <Collaspe title="Sécurité">               
                    </Collaspe>
                </div>
            </div>
            <Footer />
        </div>
        
    )
}

export default About