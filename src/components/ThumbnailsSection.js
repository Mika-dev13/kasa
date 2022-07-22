import { datasJSON } from "../datas/DatasJson";
import '../styles/Thumbnail.css';
import ThumbnailItem from "./ThumbnailItem.js";


function ThumbnailsSection() {

    return (
        <section className="kasa-Thumbnail-section">
            {datasJSON.map(({ id, title }) => (
                <ThumbnailItem
                    key={id}
                    title={title}
                />
            ))}
        </section>
    )
}


export default ThumbnailsSection