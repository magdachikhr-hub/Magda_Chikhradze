//import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import Parent from "./components/Parent";
import { themeContext } from "./context/ThemeContext";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Counter from "./components/Counter";
import Forms from "./components/forms";
function App() {
  //const [count, setCount] = useState(0);
  let theme = "light";
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Products" element={<Products></Products>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
        <Route path="/product/:id" element={<Product></Product>}></Route>
      </Routes>
      <themeContext.Provider value={theme}>
        <Parent></Parent>
      </themeContext.Provider>
      <Counter></Counter>
      <Forms></Forms>
      <Footer></Footer>
    </>
  );
}

export default App;
