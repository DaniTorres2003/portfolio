import React from "react";
import './Menu.css';
import { FaGithub, FaLinkedin, FaReact } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Menu = _ => {
  return (
    <motion.header className="Menu"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
        <IconContext.Provider value={{ className: 'icons' }}>
          <Link to="/portfolio"><FaReact /></Link>
          <div className="social-media">
            <a href="https://github.com/DaniTorres2003"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/daniel-torres-548144249/"><FaLinkedin /></a>
          </div>
        </IconContext.Provider>
    </motion.header>
  )
}

export default Menu;