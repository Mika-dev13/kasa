import { useParams } from "react-router"
import Collaspe from "../../components/Collaspe"
import { datasJSON } from "../../datas/DatasJson"


function Logding() {

    const { pageId } = useParams()

    const { title , description, equipments} = datasJSON.find( (item) => item.id === pageId)
 
    console.log(pageId)

    return (

        <div>
            {/* Slider datas=pitures */}
            {/* Afficher 5 etoitle trus si plein et false si vide en fonction du nombre de rating du logement */}
            <Collaspe key="contenu" title={title}>{description}</Collaspe>
            <Collaspe title="Equipements">
                <ul>
                {equipments.map((equipment) => (

                    <li>{equipment}</li>
                ))}
                </ul>
            </Collaspe>
        </div>

    )
}

export default Logding