import "../styles/ThumbnailItem.css";

function ThumbnailItem({ title, id }) {
    return (
        <article className="kasa-thumbnail-article">
            <h2 className="kasa-thumbnail-article-title">{title}</h2>
        </article>
    )
}

export default ThumbnailItem