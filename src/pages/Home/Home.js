import '../Home/Home.css'
import Hero from "../../components/Hero";
import ThumbnailsSection from "../../components/ThumbnailsSection";
import Footer from "../../components/Footer";


function Home() {

    return (
        <div>
            <div className='home-container'>
                <Hero />
                <ThumbnailsSection />
            </div>
            <Footer />
        </div> 
        
        
    )
}

export default Home