import {
  easeIn,
  easeInOut,
  easeOut,
  motion,
  reverseEasing,
} from "framer-motion";
import "./hero.scss";

const imgVariant = {
  hidden: {
    filter: `drop-shadow(0px 0px 20px #06B6D4)`,
  },
  visible: {
    filter: `drop-shadow(0px 0px 10px rgb(240 171 252))`,
  },
};

const scrollVariant = {
  hidden: {
    opacity: 0,
    filter: `drop-shadow(0px 0px 10px #06B6D4)`,
    y: 0,
  },
  visible: {
    opacity: 1,
    filter: `drop-shadow(0px 0px 5px rgb(240 171 252))`,
    y: 20,
  },
};

const buttonVariants = {
  hidden: {
    borderColor: "#06B6D4",
    filter: ` hue-rotate(0deg)`,
  },
  visible: {
    filter: ` hue-rotate(90deg)`,
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <motion.h2
            className=" text-white font-bold text-wrap"
            variants={{
              start: { opacity: 0, x: -50 },
              end: { opacity: 1, x: 0 },
            }}
            initial="start"
            animate="end"
            transition={{ ease: easeInOut, duration: 1, repeat: 0 }}
          >
            <span className="text-transparent bg-gradient-to-r bg-clip-text from-lime-300 to-cyan-500">
              Shift Your Vision Into Reality
            </span>
          </motion.h2>

          <motion.h1
            className=" text-white font-bold text-wrap"
            variants={{
              start: { opacity: 0, x: 50 },
              end: { opacity: 1, x: 0 },
            }}
            initial="start"
            animate="end"
            transition={{ ease: easeInOut, duration: 1, repeat: 0 }}
          >
            <motion.span
              className="text-transparent bg-gradient-to-r bg-clip-text from-emerald-200 to-teal-400"
              variants={{
                start: { filter: ` hue-rotate(0deg)` },
                end: { filter: ` hue-rotate(90deg)` },
              }}
              initial="start"
              animate="end"
              transition={{
                ease: easeInOut,
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              Crafting digital experiences that captivate and connect.
            </motion.span>
          </motion.h1>

          <div>
            <motion.button class="bg-transparent hover:bg-lime-200 text-cyan-300 font-semibold hover:text-cyan-800 p-3 mr-5 border border-lime-300 hover:border-transparent rounded">
              Explore our work
            </motion.button>
            <button class="bg-transparent text-lime-300 font-semibold p-3 mr-5 border border-cyan-300 hover:drop-shadow-xl shadow-red-500 rounded">
              Let's Begin
            </button>
          </div>
          <motion.img
            src="/src/assets/images/scrollDown.png"
            variants={scrollVariant}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: easeOut,
            }}
          />
        </div>

        <motion.div
          className="imageContainer"
          variants={{
            start: { opacity: 0, x: 50, y: 50 },
            end: { opacity: 1, x: 0, y:0 },
          }}
          initial="start"
          animate="end"
          transition={{ ease: easeInOut, duration: 1, repeat: 0 }}
        >
          <motion.img
            src="/logo512.png"
            variants={imgVariant}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: easeInOut,
            }}
          ></motion.img>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
