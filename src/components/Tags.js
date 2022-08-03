import '../styles/Tags.css'

export default function Tags({tags}) {

    return (
        <div>
            {tags.map(tag => (
                <span key={`tag-${tag}`} className='kasa-tags'>{tag}</span>
            ))}
        </div>
    )
}