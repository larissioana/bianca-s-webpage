import React, { useState } from "react";
import profileImg from '../../assets/photo-bianca.jpeg';
import {motion} from 'framer-motion';
import Footer from "../Footer/Footer";
import ScrollTop from "../ScrollTop";
import { titleAnim, titleAnim1, pageAnimation, fade, fade1, photoAnim} from "../../animation";
import {HomeContainer, Button} from './homeStyle';
import { Helmet } from "react-helmet";


const HomePage = () => {
    const[readMore,setReadMore]=useState(false);
    const info=' I am Bianca Iulia Ciocan, a post-doctoral researcher at the Centre de Recherche Astrophysique de Lyon. I recently finished my doctoral studies in the Observational Extragalactic Astrophysics research group at the University of Vienna, Department of Astrophysics. My main research focus during my PhD was galaxy formation and evolution, with a special emphasis on galaxies located in high-density environments, such as galaxy clusters. I mainly use 3D spectroscopic observations in conjunction with other multi-wavelength data to study the interplay between galaxy evolution and the environment.';
   
    const toggleOnClickText = () => {
        setReadMore(!readMore);
    };

    return(
        <><motion.section exit='exit' variants={pageAnimation} initial='hidden' animate='show'>
            <Helmet>
                <section>
                    <title>Home Page</title>
                    <meta name="description" content="I am Bianca Iulia Ciocan, a post-doctoral researcher at the Centre de Recherche Astrophysique de Lyon. I recently finished my doctoral studies in the Observational Extragalactic Astrophysics research group at the University of Vienna, Department of Astrophysics. My main research focus during my PhD was galaxy formation and evolution, with a special emphasis on galaxies located in high-density environments, such as galaxy clusters. I mainly use 3D spectroscopic observations in conjunction with other multi-wavelength data to study the interplay between galaxy evolution and the environment." />
                </section>

            </Helmet>
      <HomeContainer>
                <main className="home-container">
                    <div className="description-container">
                        <motion.h1 variants={titleAnim1}>Dr.</motion.h1>
                        <motion.h1 variants={titleAnim1}>Bianca-Iulia</motion.h1>
                        <motion.h1 variants={titleAnim}>Ciocan </motion.h1>
                        <motion.p variants={fade} initial='hidden' animate='show'>
                            {readMore ? info : `${info.substring(0, 300)}...`}
                        </motion.p>
                        <Button variants={fade1} initial='hidden' animate='show' onClick={toggleOnClickText}>
                            {readMore ? 'Show Less' : 'Read More'}</Button>
                    </div>
                    <div className="img-container">
                        <motion.img variants={photoAnim} initial='hidden' animate='show' src={profileImg} alt='profile portrait' />
                    </div>
                </main>
            </HomeContainer><Footer /><ScrollTop />
        </motion.section>
        </>
      )
  };
  export default HomePage;