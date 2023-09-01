import styled from "styled-components";
import { motion } from "framer-motion";

export const SectionWrapper = styled(motion.section)`
    margin:9rem auto 2rem auto;
    width:100vw;
    .container{
    padding-top:1rem;
    }

    .research-container{

   .description{
    padding:0rem 1rem;
}

    h1{
    font-size:clamp(1.8rem,3vw,2.5rem);
    font-weight:lighter;
    text-transform: capitalize;
    letter-spacing: .1rem;
    text-align: center;
    margin-bottom:3rem;
    -webkit-text-stroke: 1px #fff;
}
.info{
    display:grid;
    place-items: center;
}
.text{
    margin-top:3rem;
}
    p{
    font-size:clamp(.9rem,2vw,1rem);
    width:60%;
    max-width:100%;
    line-height:1.7;
    text-align:center;
   }
     @media (max-width:500px){
     p{
      width:100%;
      text-align: center;
    }
}
  }
    
`;
