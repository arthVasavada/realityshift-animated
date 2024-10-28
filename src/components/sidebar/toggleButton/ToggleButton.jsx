import { motion } from "framer-motion";
import React from "react";

const ToggleButton = ({ setOpen }) => {
  return (
    <div>
      <button onClick={() => setOpen((prev) => !prev)}>
        <svg className="mt-2 ml-3" width="30" height="30" viewBox="0 0 25 25">
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />

          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            d="M 2 9 L 20 9"
            variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
          />

          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 15.5 L 20 15.5" },
              open: { d: "M 3 2.5 L 18 16.5" },
            }}
          />
        </svg>
      </button>
    </div>
  );
};

export default ToggleButton;
