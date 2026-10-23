import React, { useContext } from "react";
import { themeContext } from "../context/ThemeContext";
function GrandChild() {
  const providedTheme = useContext(themeContext);
  console.log(providedTheme);

  return <div>GrandChild</div>;
}

export default GrandChild;
