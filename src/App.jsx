//import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import Parent from "./components/Parent";
function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <Parent></Parent>
      <Footer></Footer>
    </>
  );
}

export default App;
