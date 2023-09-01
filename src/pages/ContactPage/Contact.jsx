import { ContactStyle } from "./contactStyle";
import { AiTwotoneHome, AiFillPhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
//Data
import { contact } from "../../data";
import Footer from "../../components/Footer/Footer";
//Animation
import { motion } from "framer-motion";
import { pageAnimation, fade2, titleAnimation } from "../../animation";


const Contact = () => {
  return (
    <motion.section
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <ContactStyle>
        <motion.div variants={titleAnimation} className="title">
          <AiTwotoneHome className="home"></AiTwotoneHome>
          <h1>Department of Astrophysics, University of Vienna.</h1>
        </motion.div>
        <div className="container">
          {contact.map((item) => {
            const { id, name, location, street, country, email, phone } = item;
            return (
              <motion.div variants={fade2} key={id}>
                <h4>{name}</h4>
                <h5>{street}</h5>
                <h5>{location}</h5>
                <h5>{country}</h5>
                <div className="flex">
                  <HiOutlineMail className="email"></HiOutlineMail>
                  <a href="mailto:bianca-iulia.ciocan@univie.ac.at">{email}</a>
                </div>
                <div className="flex">
                  <AiFillPhone className="phone"></AiFillPhone>
                  <p>{phone}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </ContactStyle>
      <Footer />
    </motion.section>
  );
};
export default Contact;
