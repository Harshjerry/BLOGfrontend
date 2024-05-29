import React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./parallax.css"

const Parallax=()=>{
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-350%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return(<div   className="container"    ref={ref}>
<motion.div className="text"  style={{ x: yText }} >  <h1> Hungry For More Stories?</h1>  </motion.div>
<motion.div className="mountain"></motion.div>
<motion.div style={{ y: yBg }}className="moon"></motion.div>
    </div>)
}
export default Parallax;
