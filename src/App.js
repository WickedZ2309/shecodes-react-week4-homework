import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from React</h1>
        <Weather city="Montreal" />
      </header>

      <footer>
        This project was coded by
        <a
          href="https://github.com/WickedZ2309"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Andrea G.
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/WickedZ2309/shecodes-react-week4-homework"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://shecodes-react-week4-homework-ag.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
