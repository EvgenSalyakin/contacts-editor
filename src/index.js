import React from "react";
import ReactDOM from "react-dom/client";
import "modern-normalize";
import "./styles/index.css";
import { App, Header, Footer } from "components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header title="React template" />
    <App />
    <Footer />
  </React.StrictMode>
);
