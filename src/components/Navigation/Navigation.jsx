import { useState } from "react"
import {motion} from 'framer-motion';
import {HiOutlineMenuAlt2, HiHome} from 'react-icons/hi';
import {IoMdClose} from 'react-icons/io';
import {GoTelescope} from 'react-icons/go';
import {BsBook} from 'react-icons/bs';
import {AiOutlineFilePdf, AiOutlineMail} from 'react-icons/ai';
import {NavLink} from 'react-router-dom';
import cv from '../../assets/Academic_Cv.pdf';
import { Nav } from "./navigationStyle";

const Navigation = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    
    const handleOnClickNavigation = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <Nav>
        <motion.section className="nav-header">
            <div className="nav-flex">
            <button className='nav-toggle' onClick={handleOnClickNavigation}>
            {isNavOpen? <IoMdClose className='close'/> : <HiOutlineMenuAlt2 />}
            </button>
            </div>
            <div className={`${isNavOpen? "links-container show-container" :'links-container'}`}>
             <ul className='nav-links'>
                <li>
                    <NavLink to='/'>
                    <HiHome className='icon'/>
                    Home</NavLink>
                </li>
                <li>
                    <NavLink to='/research'>
                    <GoTelescope className='icon'/>
                    Research</NavLink>
                </li>
                <li>
                    <a href='https://ui.adsabs.harvard.edu/public-libraries/cc5pxNeHTLqBekkRvrIFlw' target="_blank" rel='noopener noreferrer'>
                    <BsBook className='icon'/>
                    Publications</a>
                </li>
                <li>
                    <a href={cv} target="_blank" rel='noopener noreferrer'>
                    <AiOutlineFilePdf className='icon'/>
                    CV</a>
                </li>
                <li>
                    <NavLink to='/contact'>
                    <AiOutlineMail className='icon'/>
                    Contact</NavLink>
                </li>
            </ul>
            </div>
            </motion.section>
        </Nav>
    )
};
export default Navigation;