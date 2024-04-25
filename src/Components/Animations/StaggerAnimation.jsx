/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const StaggerAnimation = ({ children, delayChildren, staggerChildren }) => {
  const stagger = {
    animate: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: delayChildren,
        staggerChildren: staggerChildren,
        staggerDirection: 1,
      },
    },
    initial: {
      scale: 1,
      opacity: 0,
      y: 100,
    },
  };

  return (
    <motion.div
      variants={stagger}
      initial="initial"
      //   animate="animate"
      whileInView="animate"
      viewport={{ once: false }}
    >
      {children}
    </motion.div>
  );
};

export default StaggerAnimation;
