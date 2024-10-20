import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import ProjectList from "../../components/ProjectList";
import Footer from "../../components/Footer";
import projects from "../../_data/projects.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight, // Adjust this value as needed
      behavior: 'smooth' // Smooth scrolling
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <main className="portfolio container">
        <PageHeader title={`Portfolio (${projects.length}+)`} description="View my work" />

        <div className="row">
          <ProjectList />
        </div>

        {isVisible && (
          <div className="scroll-indicator" onClick={handleClick}>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
