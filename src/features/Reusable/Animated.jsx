/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const animations = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
};

export default function AnimatedPage({ children }) {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

AnimatedPage.propTypes = {
  children: PropTypes.element,
};
