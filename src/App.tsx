import "./App.css";
import Zipper from "./components/common/Zipper";
import GlobalStyle from "./style/styles";
import Works from "./components/common/Works";
import Introduce from "./components/common/Introduce";
import Project from "./components/common/Project";
import Tech from "./components/common/Tech";
import Activity from "./components/common/Activity";
import Footer from "./components/common/Footer";
import styled from "styled-components";
import backgroundImage from "./asset/img/background.png";

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout />
      <Zipper />
      <Works />
      <Introduce />
      <Project />
      <Tech />
      <Activity />
      <Footer />
    </>
  );
}

export default App;

const Layout = styled.div`
  width: 100%;
  height: 12073px;
  position: absolute;
  top: 0;
  left: 0;

  background-image: url(${backgroundImage});
  /* mix-blend-mode: multiply; */
  mix-blend-mode: overlay;
  opacity: 0.7;
`;
