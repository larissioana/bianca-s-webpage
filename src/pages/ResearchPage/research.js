import styled from "styled-components";
import { motion } from "framer-motion";

export const ResearchStyle = styled(motion.section)`
  margin: 8rem auto 4rem auto;
  display: grid;
  place-items: center;
  padding: 0rem 1rem;
  min-height: 70vh;

  h1 {
    font-size: clamp(1rem, 2vw, 1.2rem);
    font-weight: lighter;
    text-transform: capitalize;
    letter-spacing: 0.1rem;
    padding: 1rem 0rem;
    text-align: center;
    color: #ebebeb;
    -webkit-text-stroke: 1px #fff;
  }

  .container {
    display: block;
    width: 90%;
    overflow: hidden;
    background: none;
    box-shadow: 0px 0px 15px 0px #050505;

    p {
      padding: 0.5rem;
      text-align: center;
      color: #242323;
      font-size: clamp(0.8rem, 2vw, 1.2rem);
    }

    img {
      width: 100%;
      min-width: 100%;
      object-fit: cover;
    }
  }
  @media (max-width: 900px) {
    margin: 10rem auto;
    min-height: 40vh;
    .container {
      width: 100%;
    }
  }
`;
