import Intro from "./components/intro/intro";
import About from "./components/about";
import ProductList from "./components/productList";
import Contact from "./components/contact";
import Toggle from "./components/toggle";
import { useContext } from "react";
import { ThemeContext } from "./context";

function App() {

  const theme = useContext(ThemeContext)

  const darkMode = theme.state.darkMode;

  return (
    <div style={{ backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white" }} className="App">
      <Intro />
      <About />
      <ProductList />
      <Contact />
      <Toggle />


    </div>
  );
}

export default App;
