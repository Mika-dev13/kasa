import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import '../styles/Collapse.css'

export default function Collaspe({title, taille, children}) {
    console.log(taille)
    const [active, setActive] = useState(false)

    const handleToggle = e => {
        
        return setActive(!active)
    }
   
    return (
        <div className={`kasa-collapse-container ${taille === "large" && "collaspe_large"}`}>
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
