import React from "react";
import { useState } from "react";

function DarkMode() {
  const [useDarkMode, setUseDarkMode] = useState(false);

  return (<div className={useDarkMode ? "dark-mode dark" : "dark-mode light"}>
    <h1>Dark Mode</h1>
    <label>
      <input
        type="checkbox"
        onChange={() => {
          setUseDarkMode(!useDarkMode);
        }}
      />
      Use dark mode?
    </label>
    <span style = {{ marginLeft: '8px' }}></span>
  </div>);
}

export default DarkMode;
