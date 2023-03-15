import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Zipper from "./components/common/Zipper";
import GlobalStyle from "./style/styles";
import Works from "./components/common/Works";
import Introduce from "./components/common/Introduce";
import Project from "./components/common/Project";
import Tech from "./components/common/Tech";

function App() {
  return (
    <>
      <GlobalStyle />
      <Zipper />
      <Works />
      <Introduce />
      <Project />
      <Tech />
    </>
  );
}

export default App;
