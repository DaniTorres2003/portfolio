import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import './Home.css';
import programador from '../../images/programador.png'

const Home = _ => {
  return (
    <motion.div className="Home"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <div className="text">
        <h1>Olá! Me chamo Daniel Torres, sou estudante de Análise e Desenvolvimento de Sistemas.</h1>
        <Link to="/projetos">
          <button className="btn">Clique para ver meus projetos</button>
        </Link>
      </div>
      <img src={programador} alt="Programador" className="programador" />
    </motion.div>
  )
}

export default Home;