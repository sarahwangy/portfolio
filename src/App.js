import Intro from "./pages/intro";
import About from "./pages/about";
import ProductList from "./pages/productList";
import Contact from "./pages/contact";
import Toggle from "./components/toggle";
import Topbar from "./components/topBar";
import Skills from "./pages/skill";
import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useContext } from "react";
import { ThemeContext } from "./context";

function App() {
  const theme = useContext(ThemeContext);

  const darkMode = theme.state.darkMode;

  return (
    <Suspense fallback={<h1>Loading.....</h1>}>
      <BrowserRouter>
        <div
          style={{ backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white" }}
          className="App"
        >
          {/* <Toggle /> */}
          <Topbar />

          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<ProductList />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skill" element={<Skills />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
