import React from "react";
import { motion } from "framer-motion";
import './Projetos.css'
import { FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io'
import { IconContext } from "react-icons";

import calculadora from '../../images/calculadora.png'
import interfaceDeLogin from '../../images/interfaceDeLogin.png'
import pokedex from '../../images/pokedex.png'
import jogoDaMemoria from '../../images/jogoDaMemoria.png'

const Projetos = _ => {
  return (
    <motion.div className="Projetos"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <div className="projeto">
        <img src={calculadora} alt="Calculadora" />
        <div className="projeto-ico">
          <IconContext.Provider value={{ className: 'ico'}}>
            <FaReact />
            <FaCss3Alt />
          </IconContext.Provider>
        </div>
        <a href="https://danitorres2003.github.io/calculadora/">Projeto</a>
        <a href="https://github.com/DaniTorres2003/calculadora">Repositório</a>
      </div>
      <div className="projeto">
        <img src={jogoDaMemoria} alt="Jogo da Memória" />
        <div className="projeto-ico">
          <IconContext.Provider value={{ className: 'ico' }}>
            <IoLogoJavascript />
            <FaCss3Alt />
            <FaHtml5 />
          </IconContext.Provider>
        </div>
        <a href="https://danitorres2003.github.io/jogo-da-memoria/">Projeto</a>
        <a href="https://github.com/DaniTorres2003/jogo-da-memoria">Repositório</a>
      </div>
      <div className="projeto">
        <img src={pokedex} alt="Pokedéx" />
        <div className="projeto-ico">
          <IconContext.Provider value={{ className: 'ico' }}>
            <IoLogoJavascript />
            <FaCss3Alt />
            <FaHtml5 />
          </IconContext.Provider>
        </div>
        <a href="https://danitorres2003.github.io/pokedex/">Projeto</a>
        <a href="https://github.com/DaniTorres2003/pokedex">Repositório</a>
      </div>
      <div className="projeto">
        <img src={interfaceDeLogin} alt="Interface de Login" />
        <div className="projeto-ico">
          <IconContext.Provider value={{ className: 'ico' }}>
            <FaCss3Alt />
            <FaHtml5 />
          </IconContext.Provider>
        </div>
        <a href="https://danitorres2003.github.io/interface-login/">Projeto</a>
        <a href="https://github.com/DaniTorres2003/interface-login">Repositório</a>
      </div>
    </motion.div>
  )
}

export default Projetos;