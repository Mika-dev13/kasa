import '../styles/Avatar.css'

export default function Avatar({host}) {

    return (
        <div className="kasa-description-avatar">
            <span>{host.name}</span>
            <img src={host.picture} alt="avatar de l'hébergeur"/>
        </div>
    )
}