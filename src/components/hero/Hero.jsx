import { easeInOut, motion, reverseEasing } from "framer-motion";
import "./hero.scss";

const imgVariant = {
  hidden: {
    filter: `drop-shadow(0px 0px 10px #06B6D4)`,
  },
  visible: {
    filter: `drop-shadow(0px 0px 10px rgb(240 171 252))`,
  },
};

const buttonVariants={
  hidden: {
    
    filter: `drop-shadow(0px 0px 10px #06B6D4)`,
  },
  visible: {
    filter: `drop-shadow(0px 0px 10px rgb(240 171 252))`,
  },
}

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h2 className=" text-white font-bold text-wrap">
            <span className="text-transparent bg-gradient-to-r bg-clip-text from-lime-300 to-cyan-500">
              Shift Your Vision Into Reality
            </span>
          </h2>

          <h1 className=" text-white font-bold text-wrap">
            <motion.span className="text-transparent bg-gradient-to-r bg-clip-text from-emerald-200 to-teal-400"
            variants={{start:{filter:` hue-rotate(0deg)`},end:{filter:` hue-rotate(90deg)`}}}
            initial="start"
            animate="end"
            transition={{ease:easeInOut, duration:4, repeat:Infinity, repeatType: "reverse"}}
            >
              Crafting digital experiences that
              captivate and connect.
            </motion.span>
          </h1>

          <div>
            <motion.button className="button1"
            >Explore our work</motion.button>
            <button className="button2">Let's Begin</button>
          </div>
          <motion.img src="/src/assets/images/scrollDown.png" 
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:1,ease:easeInOut,repeat:Infinity,repeatType:"reverse"}}/>
        </div>

        <div className="imageContainer">
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
