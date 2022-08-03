import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import '../styles/CarouselImg.css'

export default function Carousel({pictures}) {

    const [currentIndex, setCurrentIndex] = useState(0)

    const goToPrevious = () => {

        const isFirstPicture = currentIndex === 0
        const newIndex = isFirstPicture ? pictures.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)

    }
    const goToNext = () => {

        const isLastPicture = currentIndex === pictures.length - 1
        const newIndex = isLastPicture ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)

    }


    return (
        <div className='kasa-carousel-img-container'>
            <FaChevronLeft className='kasa-carousel-chevron left' onClick={goToPrevious} />
            <FaChevronRight className='kasa-carousel-chevron right' onClick={goToNext} />
            <div style={{backgroundImage: `url(${pictures[currentIndex]})`}} className="kasa-carousel-img"></div>
        </div>
    )
}