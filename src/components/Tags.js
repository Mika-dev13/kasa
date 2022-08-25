import "../styles/Tags.css";

export default function Tags({ tags }) {
  return (
    <div className="kasa-tag-container">
      {tags.map((tag, index) => (
        <div className="kasa-tag-wrapper">
          <span key={`tag-${index}`} className="kasa-tags">
            {tag}
          </span>
        </div>
      ))}
    </div>
  );
}
