import { useParams, Navigate } from "react-router";
import { datasJSON } from "../../datas/DatasJson";
import "../logding/LogdingPage.css";
import Carousel from "../../components/Carousel";
import DescriptionLogding from "../../components/DescriptionLogding";
import Avatar from "../../components/Avatar";
import Tags from "../../components/Tags";
import Stars from "../../components/Stars";
import Collaspe from "../../components/Collaspe";
import Footer from "../../components/Footer";

function Logding() {
  const { pageId } = useParams();
  const logding = datasJSON.find(item => item.id === pageId);

  if (!logding) {
    return <Navigate to="/404" />;
  }

  const {
    description,
    equipments,
    title,
    location,
    host,
    tags,
    rating,
    pictures,
  } = logding;

  return (
    <div>
      <div className="logding-container">
        {/* Slider datas=pitures */}
        {/* Afficher 5 etoitle trus si plein et false si vide en fonction du nombre de rating du logement */}

        <div className="kasa-carousel-container">
          <Carousel pictures={pictures} />
        </div>

        <section className="kasa-logding-content">
          <div className="kasa-logding-title">
            <DescriptionLogding title={title} location={location} />
            <Tags tags={tags} />
          </div>

          <div className="kasa-avatar-stars-section">
            <Avatar host={host} />
            <Stars rating={rating} />
          </div>
        </section>

        <div className="kasa-collapse-section">
          <Collaspe key="description" title="Description">
            {description}
          </Collaspe>

          <Collaspe key="equipement" title="Équipements">
            <ul>
              {equipments.map(equipment => (
                <li key={equipment}>{equipment}</li>
              ))}
            </ul>
          </Collaspe>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Logding;
