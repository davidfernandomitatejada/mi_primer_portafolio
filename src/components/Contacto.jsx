import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./styles/Contacto.css";

const wsp = "https://wa.me/59169491014?text=Hola,%20quiero%20más%20información";

const Contacto = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="Contacto"
      variants={variants}
      initial="hidden"
      animate={controls}
    >
      <h2>Contacto</h2>
      <p>Si deseas ponerte en contacto conmigo, presiona aquí</p>
      <button onClick={() => window.open(wsp, "_blank")}>Contactar</button>
    </motion.section>
  );
};

export default Contacto;
