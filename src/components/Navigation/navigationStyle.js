import styled from "styled-components";

export const Nav = styled.nav`
 width:100%;
background:rgba(235,235,235,.96);
height:5rem;
z-index:10;
position:fixed;
top:0;

    button{
    background:none;
    border:none;
    color:#615f5f;
    cursor:pointer;
    position:absolute;
    left:1rem;
    top:1rem;
    font-size:2.6rem;
    }

    .close{
    background:none;
    border:none;
    color:#615f5f;
    cursor:pointer;
    position:absolute;
    left:0rem;
    top:0rem;
    font-size:2.6rem;
    }

    .nav-flex{
    position:relative;
    }

    .links-container{
    position:absolute;
    top:5rem;
    left:0;
    width:15rem;
    min-height: 90vh;
    background:rgba(46,46,46,.8);
    border-right:2px solid #e2dfdf;
    border-top:2px solid #e2dfdf;
    border-bottom:2px solid #e2dfdf;
    transform: translateX(-300px);
    transition:transform .5s ease-in-out;
    z-index:10;
    backdrop-filter: blur(1px);
    padding:10rem 2rem;
    
    a{
        letter-spacing: .1rem;
        color:rgb(228, 224, 224);
        font-size:1rem;
        cursor:pointer;
        transition: all .3s ease-in;
        &:hover{
        animation:animLinks .2s ease-in;
        color:#aaa8a8;
    
     }
    }
    .icon{
        margin-right:.3rem;
        font-size:.9rem;
    }

   @keyframes anim{
    from{
        opacity:0
    }
    to{
        opacity:1
    }
   }
    .nav-links{
        display:block;
    }
  
    li{
        margin-bottom:2.5rem;
        padding-left: 1rem;
    }
   
  }
  .show-container{
    transform:translateX(0px);
    animation:anim .8s ease-in;
  
  }
 
`