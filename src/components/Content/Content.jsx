import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "../../views/Home/Home";
import Projetos from "../../views/Projetos/Projetos";

const Content = _ => {
  const location = useLocation();

  return (
    <main>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/portfolio/projetos" element={<Projetos />} />
        </Routes>
      </AnimatePresence>
    </main>
  )
}

export default Content;