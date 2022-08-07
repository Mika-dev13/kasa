import '../styles/DescriptionLogding.css'

export default function DescriptionLogding({title, location,}) {

    return (       
            <div className="kasa-description-content">
                <h1>{title}</h1>
                <span>{location}</span>
            </div>          
    )
}