import React from "react";
import "./styles/MainContent.css";
import Proyectos from "./Proyectos";
import Habilidades from "./Habilidades";

const MainContent = () => {
  return (
    <main>
      <h1>Bienvenido a mi portafolio</h1>
      <Proyectos />
      <Habilidades />
    </main>
  );
};

export default MainContent;
