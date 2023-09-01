import {motion} from 'framer-motion';
import {galaxiesInfo} from '../../data';
import { fade2, pageAnimation, titleAnimation } from '../../animation';
import Footer from '../Footer/Footer';
import { SectionWrapper } from './researchAbstractStyle';
import ScrollTop from '../ScrollTop';

const ResearchAbstract = () => {

    return(
        <motion.div exit='exit' variants={pageAnimation} initial='hidden' animate='show'>
        <SectionWrapper>
           <div className="container">
            {galaxiesInfo.map(item=>{
                const{id, info, title, moreInfo} = item;
                return <div className="research-container" key={id}>
                <div className="description">
                <motion.h1 variants={titleAnimation}>{title}</motion.h1>
           
                    <div className="info">
                <motion.p variants={fade2}>{info}</motion.p>
                <br/>
                <motion.p variants={fade2} className="text">{moreInfo}</motion.p>
                </div>
          
                </div>
                </div>
            })}
        </div>
        </SectionWrapper>
        <Footer/>
        <ScrollTop/>
        </motion.div>
    )
};

export default ResearchAbstract;