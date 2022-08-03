import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import '../styles/Collapse.css'

export default function Collaspe({title, children}) {

    const [active, setActive] = useState(false)

    const handleToggle = e => {
        
        return setActive(!active)
    }
   
    return (
        <div className="kasa-collapse-container">
            <div className="kasa-collapse-title" onClick={handleToggle}>
                <h3>{title}</h3>
                <div>
                    <FaChevronDown className={`kasa-collapse-chevron ${active && "clicked"}`} />
                </div>                          
            </div>
            <div className={`kasa-collapse-text ${active && "active"}`}>
                <div>{children}</div>
            </div>
        </div>
    )
}
