import { useParams } from "react-router"
import { datasJSON } from "../../datas/DatasJson"
import '../../styles/LogdingPage.css'
import Collaspe from "../../components/Collaspe"
import DescriptionLogding from "../../components/DescriptionLogding"


function Logding() {

    const { pageId } = useParams()

    const { description, equipments, title, location, host} = datasJSON.find( (item) => item.id === pageId)
 
    return (

        <div className="container">
            {/* Slider datas=pitures */}
            {/* Afficher 5 etoitle trus si plein et false si vide en fonction du nombre de rating du logement */}

            <section className="kasa-logding-description">
                <DescriptionLogding title={title} location={location} host={host}/>
            </section>

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

    )
}

export default Logding