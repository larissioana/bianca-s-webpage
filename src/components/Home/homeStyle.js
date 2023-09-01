import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeContainer=styled(motion.section)`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap; 
    padding:15% 15% 10% 15%;

    .home-container{
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap; 
   }

    .img-container{
    overflow:hidden;

    img{
    width:25rem;
    height:30rem;
    object-fit: cover;
    margin-left:5rem;
    object-position: right;
    &:hover{
    filter:grayscale(100%);
   }
    }
  }
   .description-container, .img-container{
    flex:1;
  }

    .description-container{
    p{
    max-width:500px;
    margin-top:2rem;
    line-height:1.6rem;
  }

    h1{
    font-size:clamp(1.5rem,3vw,4rem);
    font-weight:500;
    text-transform: capitalize;
    letter-spacing: .1rem;
    overflow:hidden;
    text-align:start;
   
}
  }

@media (max-width:1295px){
  padding:15% 5%;
 .description-container{
  h1{
  line-height:1.1;
 }
 }
}

@media (max-width:1070px){
  margin:15% 2% 8% 2%;
  .home-container{
    display: grid;
    place-items: center;
 
  }
  .img-container,.description-container{
    display:grid;
    place-items: center;
  }
  .img-container{
   margin-top:3rem;
    img{
    width: 25rem;
    margin-left:0;
  }
  }
}

@media (max-width:560px){
  padding:5rem 1rem;
  .description-container{
    h2{
      line-height: 2.5rem;
    }
   p{
    max-width:800px;
    text-align: center;
   }
  }
  .img-container{
    img{
      width:20rem;
      height:25rem;
    }
  }
}

@media (max-width:389px){
    img{
    max-width:18rem;
    max-height:22rem;
    }
  }
 `;

 export const Button = styled(motion.button)`
    padding:1rem 3rem;
    margin-top:2rem;
    margin-bottom:3rem;
    background:none;
    border:1px solid #ebebeb;
    color: #ebebeb;
    cursor:pointer;
    letter-spacing: .1rem;
    transition: border 0.5s ease-in;
    &:hover{
   background:#ebebeb;
   color:#17181a;
    }
 `
