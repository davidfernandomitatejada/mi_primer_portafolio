import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./styles/Habilidades.css";

const Habilidades = () => {
  const misHabilidades = [
    {
      id: 1,
      nombre: "JavaScript",
      nivel: "Intermedio",
      imagen: "/js.svg",
    },
    {
      id: 2,
      nombre: "React",
      nivel: "Intermedio",
      imagen: "/react.svg",
    },
    {
      id: 3,
      nombre: "Node.js",
      nivel: "Intermedio",
      imagen: "/node.svg",
    },
    { id: 4, nombre: "CSS", nivel: "Avanzado", imagen: "/css.svg" },
    { id: 5, nombre: "HTML", nivel: "Avanzado", imagen: "/html5.svg" },
  ];
  return (
    <section className="Habilidades">
      <h2>Mis Skills</h2>
      <div className="lista-habilidades">
        {misHabilidades.map((habilidad) => (
          <CardOnScroll key={habilidad.id} habilidad={habilidad} />
        ))}
      </div>
    </section>
  );
};
const CardOnScroll = ({ habilidad }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="Habilidades-card"
      variants={cardVariants}
      initial="hidden"
      animate={controls}
    >
      <img src={habilidad.imagen} alt={habilidad.nombre} />
      <div>
        <h3>{habilidad.nombre}</h3>
        <p>{habilidad.nivel}</p>
      </div>
    </motion.div>
  );
};

export default Habilidades;
