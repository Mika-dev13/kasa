import '../styles/Tags.css'

export default function Tags({tags}) {

    return (
        <div className='kasa-tag-container'>
            {tags.map(tag => (
                <div className='kasa-tag-wrapper'>
                    <span key={`tag-${tag}`} className='kasa-tags'>{tag}</span>
                </div>
            ))}
        </div>
    )
}