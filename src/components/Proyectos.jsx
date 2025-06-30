import React from "react";
import "./styles/Proyectos.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Proyectos = () => {
  const myProjects = [
    {
      id: 1,
      title: "Portfolio React",
      description: "Un portfolio personal hecho con React.",
      url: "https://github.com/tuusuario/portfolio-react",
      image: "/react.svg",
    },
    {
      id: 2,
      title: "API REST Node",
      description: "Backend RESTful API con Node.js y Express.",
      url: "https://github.com/davidfernandomitatejada/programapoke2.git",
      image: "/python.svg",
    },
    {
      id: 3,
      title: "Tienda Online",
      description: "Proyecto de e-commerce con React y Firebase.",
      url: "https://github.com/davidfernandomitatejada/fortubetpage.git",
      image: "/html5.svg",
    },
  ];

  return (
    <section className="Projects">
      <h2>Mis Proyectos</h2>
      <div className="Projects-list">
        {myProjects.map((project) => (
          <CardOnScroll key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

const CardOnScroll = ({ project }) => {
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
      className="Project-card"
      variants={cardVariants}
      initial="hidden"
      animate={controls}
    >
      <img src={project.image} alt={project.title} />
      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <button onClick={() => window.open(project.url, "_blank")}>
          Ver repositorio
        </button>
      </div>
    </motion.div>
  );
};

export default Proyectos;
