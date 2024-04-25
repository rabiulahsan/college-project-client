/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
const SingleResearch = ({ research }) => {
  const { name, link } = research;

  // this is for animation
  const items = {
    initial: {
      y: "100",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div variants={items}>
      <div className="border border-gray-400 text-center p-4">
        <p className="text-lg font-semibold cursor-pointer">
          <a href={link} target="blank">
            {name}
          </a>
        </p>
      </div>
    </motion.div>
  );
};

export default SingleResearch;
