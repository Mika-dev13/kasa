import { datasJSON } from "../datas/DatasJson";
import "../styles/ThumbnailSection.css";
import ThumbnailItem from "./ThumbnailItem.js";

function ThumbnailsSection() {
  return (
    <section className="kasa-Thumbnail-section">
      {datasJSON.map(({ id, title, cover }) => (
        <ThumbnailItem key={id} title={title} cover={cover} id={id} />
      ))}
    </section>
  );
}

export default ThumbnailsSection;
