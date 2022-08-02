import { useParams } from "react-router"
import Collaspe from "../../components/Collaspe"
import { datasJSON } from "../../datas/DatasJson"
import '../../styles/LogdingPage.css'


function Logding() {

    const { pageId } = useParams()

    const { description, equipments} = datasJSON.find( (item) => item.id === pageId)
 
    return (

        <div className="container">
            {/* Slider datas=pitures */}
            {/* Afficher 5 etoitle trus si plein et false si vide en fonction du nombre de rating du logement */}



            <section className="kasa-collapse-section">
                
                <Collaspe key="description" title="Description">{description}</Collaspe>
                
                <Collaspe key="equipement" title="Équipements">
                <ul>
                    {equipments.map((equipment) => (
                        <li key={equipment[0]}>{equipment}</li>
                    ))}
                    </ul>
                </Collaspe>
            </section>

            
        </div>

    )
}

export default Logding