import React from "react";
import "./styles/MainContent.css";
import Proyectos from "./Proyectos";
import Habilidades from "./Habilidades";
import Contacto from "./Contacto";
import Footer from "./Footer";
const base = import.meta.env.BASE_URL;

let foto = `${base}assets/fotopers.jpg`;

const MainContent = () => {
  return (
    <main>
      <h1>Bienvenido a mi portafolio</h1>
      <div className="fondo">
        <p id="intro">
          “¡Hola! Soy un desarrollador junior que cree firmemente en la mejora
          constante. Me gusta aprender haciendo: por eso presento aquí algunos
          de mis primeros proyectos, resultado de mi esfuerzo, curiosidad y
          dedicación. Tengo un fuerte compromiso con el aprendizaje autodidacta
          y la formación continua, participando en cursos, explorando
          tecnologías modernas y aplicando un enfoque imperativo para convertir
          ideas en soluciones reales. Mi meta es crecer cada día como
          profesional y aportar valor a cualquier equipo o proyecto en el que
          participe.”
        </p>
        <img src={foto} alt="" id="fotopers" />
      </div>
      <Proyectos />
      <Habilidades />
      <Contacto />
      <Footer />
    </main>
  );
};

export default MainContent;
