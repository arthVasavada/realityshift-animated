import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";



const Navbar = () => {

  const imgVariant = {
    hidden: {
      filter: `drop-shadow(0px 0px 1px #06B6D4)`,
    },
    visible: {
      filter: `drop-shadow(0px 0px 10px rgb(240 171 252))`,
    },
  };


  return (
    <div className="navbar">
      <Sidebar />
      <motion.div className="wrapper"
      variants={imgVariant}
      initial="hidden" animate="visible"
      transition={{
        duration:2, repeat:Infinity, repeatType:"reverse"
      }}
      >
        
        <motion.span className="tracking-widest text-2xl mr-2"
        initial={{opacity:0,scale:0.8}}
        animate={{opacity:1,scale:1}}
        transition={{duration:0.5}}>
          REALITYSHIFT
        </motion.span>
      </motion.div>
      
      
      
    </div>
  );
};

export default Navbar;
