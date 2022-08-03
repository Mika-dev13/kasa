import { IoStar } from "react-icons/io5";
import '../styles/Stars.css'

export default function Stars({rating}) {
    
    const ratingStars = [1, 2, 3, 4, 5]

    return (
        <div>
            {ratingStars.map(ratingStar => (     
                    <IoStar className={`${ratingStar <= rating ? "kasa-star-color" : ""} kasa-star`} />
                ))}
                      
        </div>
    )
}