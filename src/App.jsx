//import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import Parent from "./components/Parent";
import { themeContext } from "./context/ThemeContext";
function App() {
  //const [count, setCount] = useState(0);
  let theme = "light";
  return (
    <>
      <Header></Header>
      <themeContext.Provider value={theme}>
        <Parent></Parent>
      </themeContext.Provider>
      <Footer></Footer>
    </>
  );
}

export default App;
