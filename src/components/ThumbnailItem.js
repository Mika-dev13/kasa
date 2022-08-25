import { Link } from "react-router-dom";
import "../styles/ThumbnailItem.css";

function ThumbnailItem({ id, title, cover }) {
  return (
    <Link to={`/logding/${id}`}>
      <article className="kasa-thumbnail-article">
        <figure className="kasa-thumbnail-figure">
          <img className="kasa-thumbnail-img" src={cover} alt={title} />
          <figcaption className="kasa-thumbnail-article-title">
            {title}
          </figcaption>
        </figure>
      </article>
    </Link>
  );
}

export default ThumbnailItem;
