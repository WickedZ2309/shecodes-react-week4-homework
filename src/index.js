import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Weather from "./Weather";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <Weather />
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
  </StrictMode>
);
