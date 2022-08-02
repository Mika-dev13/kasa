import '../styles/DescriptionLogding.css'

export default function DescriptionLogding({title, location, host}) {

    return (
        <div className="kasa-description-content">
            <div className="kasa-description-title">
                <h1>{title}</h1>
                <span>{location}</span>
            </div>          
            <div className="kasa-description-avatar">
                <span>{host.name}</span>
                <img src={host.picture} alt="avatar de l'hébergeur"/>
            </div>
        </div>
    )
}