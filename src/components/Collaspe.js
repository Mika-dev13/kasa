import { FaChevronUp } from "react-icons/fa";
import '../styles/Collapse.css'

export default function Collaspe({title, children}) {

    return (
        <div className="kasa-collapse-container">
            <div className="kasa-collapse-title">
                <h3>{title}</h3>
                <FaChevronUp style={{fontSize: '1.3em'}}/>
            </div>
            <div className="kasa-collapse-text">
                <p>{children}</p>
            </div>
        </div>
    )
}
