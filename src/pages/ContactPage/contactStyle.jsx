import styled from "styled-components";
import { motion } from "framer-motion";

export const ContactStyle = styled(motion.main)`
  margin: 10rem auto 10rem auto;
  z-index: 9;
  box-shadow: 0px 0px 20px 0px #050505;
  padding: 1rem 0rem;
  width: 50%;
  padding: 2rem 1rem;
  display: grid;
  place-items: center;
  min-height: 50vh;

  .title {
    display: flex;
    align-items: start;
    justify-content: center;
    text-align: start;

    .home {
      color: white;
      font-size: clamp(1rem, 2vw, 1.3rem);
    }
    h1 {
      font-size: clamp(1rem, 3vw, 1.4rem);
      font-weight: lighter;
      color: #e0e0e0;
      letter-spacing: 0.1rem;
      text-align: center;
      width: 100%;
      line-height: 1.3;
    }
  }

  .flex {
    display: flex;
    align-items: start;
  }
  .email,
  .phone,
  .home {
    color: white;
    font-size: clamp(1.2rem, 2vw, 1.3rem);
  }
  h4 {
    font-weight: lighter;
    color: #e0e0e0;
    font-size: clamp(0.9rem, 2vw, 1.2rem);
    padding-bottom: 0.6rem;
  }

  h5 {
    font-weight: lighter;
    color: #e0e0e0;
    font-size: clamp(0.9rem, 2vw, 1.1rem);
    padding-bottom: 0.6rem;
  }

  p,
  a {
    color: #e0e0e0;
    font-size: clamp(0.9rem, 2vw, 1.1rem);
    margin-left: 0.5rem;
    padding-bottom: 0.6rem;
  }
  a:hover {
    color: #918989;
  }

  @media (max-width: 800px) {
    width: 90%;
  }
`;
