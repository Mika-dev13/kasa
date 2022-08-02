import { FaAngular } from "react-icons/fa";
import '../styles/Collapse.css'

export default function Collaspe({title, children}) {

    return (
        <div>
            <div className="kasa-collapse-container">
                <h2>{title}</h2>
              <FaAngular />
                <h3>Description</h3>
                <p>{children}</p>
            </div>
        </div>
    )
}

