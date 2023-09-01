import { NavLink } from "react-router-dom";
import { pageAnimation } from "../../animation";
import { motion } from "framer-motion";
import Footer from "../../components/Footer/Footer";
import diagram from "../../assets/Eg_Bodo.png";
import { ResearchStyle } from "./research";
import { Button } from "../../components/Home/homeStyle";
import { LazyLoadImage } from "react-lazy-load-image-component";


const Research = () => {
  return (
    <motion.section
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <ResearchStyle>
        <div className="container">
          <LazyLoadImage
            src={diagram}
            alt="research diagram"
          />
          <h1>Extragalactic Astrophysics</h1>
        </div>
        <NavLink to="/research/:abstract">
          <Button>See research</Button>
        </NavLink>
      </ResearchStyle>
      <Footer />
    </motion.section>
  );
};
export default Research;
