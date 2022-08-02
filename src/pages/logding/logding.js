import { useParams } from "react-router"
import Collaspe from "../../components/Collaspe"
import { datasJSON } from "../../datas/DatasJson"
import '../../styles/CollapsePage.css'


function Logding() {

    const { pageId } = useParams()

    const { description, equipments, id} = datasJSON.find( (item) => item.id === pageId)
 
    console.log(pageId)

    return (

        <div>
            {/* Slider datas=pitures */}
            {/* Afficher 5 etoitle trus si plein et false si vide en fonction du nombre de rating du logement */}
            <section className="kasa-collapse-section">
                <Collaspe key={id} title="Description">{description}</Collaspe>
                <Collaspe key={id} title="Équipments">
                <ul>
                    {equipments.map((equipment) => (
                        <li>{equipment}</li>
                    ))}
                    </ul>
                </Collaspe>
            </section>
        </div>

    )
}

export default Logding