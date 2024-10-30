import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        
        <motion.span className="tracking-widest text-2xl mr-2"
        initial={{opacity:0,scale:0.5}}
        animate={{opacity:1,scale:1}}
        transition={{duration:0.5}}>
          REALITYSHIFT
        </motion.span>
      </div>
      
      
      
    </div>
  );
};

export default Navbar;
