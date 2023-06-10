import React from "react";
import { BrowserRouter } from "react-router-dom";

import Menu from './components/Menu/Menu';
import Content from "./components/Content/Content";

const App = _ => {
  return (
    <BrowserRouter>
      <Menu />
      <Content />
    </BrowserRouter>
  )
}

export default App;