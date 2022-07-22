import "../styles/ThumbnailItem.css";

function ThumbnailItem({ title, id, cover }) {
    return (
        <article className="kasa-thumbnail-article">
            <figure className="kasa-thumbnail-figure">
                <img className="kasa-thumbnail-img" src={cover} alt={title} />
                <figcaption className="kasa-thumbnail-article-title">{title}</figcaption>
            </figure>
        </article>
    )
}

export default ThumbnailItem