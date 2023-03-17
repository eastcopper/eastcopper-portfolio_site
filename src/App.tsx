import "./App.css";
import Zipper from "./components/common/Zipper";
import GlobalStyle from "./style/styles";
import Works from "./components/common/Works";
import Introduce from "./components/common/Introduce";
import Project from "./components/common/Project";
import Tech from "./components/common/Tech";
import Activity from "./components/common/activity";

function App() {
  return (
    <>
      <GlobalStyle />
      <Zipper />
      <Works />
      <Introduce />
      <Project />
      <Tech />
      <Activity />
    </>
  );
}

export default App;
