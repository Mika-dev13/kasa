import { useParams } from "react-router"
import { datasJSON } from "../../datas/DatasJson"
import '../logding/LogdingPage.css'
import Carousel from "../../components/Carousel"
import DescriptionLogding from "../../components/DescriptionLogding"
import Tags from "../../components/Tags"
import Stars from "../../components/Stars"
import Collaspe from "../../components/Collaspe"
import Footer from "../../components/Footer"


function Logding() {

    const { pageId } = useParams()
    const { description, equipments, title, location, host, tags, rating, pictures} = datasJSON.find( (item) => item.id === pageId)
    
    
    return (

        <div>
            <div className="container">
                {/* Slider datas=pitures */}
                {/* Afficher 5 etoitle trus si plein et false si vide en fonction du nombre de rating du logement */}
                
                <div className="kasa-carousel-container">
                    <Carousel pictures={pictures}/>
                </div>

                <section className="kasa-logding-description">
                    <DescriptionLogding title={title} location={location} host={host}/>
                </section>

                <div className="kasa-tags-stars-section">
                    <Tags tags={tags} />
                    <Stars rating={rating} />               
                </div>

                <div className="kasa-collapse-section">               
                    <Collaspe key="description" title="Description">{description}</Collaspe>
                    
                    <Collaspe key="equipement" title="Équipements">
                    <ul>
                        {equipments.map((equipment) => (
                            <li key={equipment[0]}>{equipment}</li>
                        ))}
                        </ul>
                    </Collaspe>
                </div>          
            </div>
            <Footer />  
        </div>
    )
}

export default Logding