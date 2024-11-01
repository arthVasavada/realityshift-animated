import { motion, stagger } from 'framer-motion'
import React from 'react'

const linkVariants={
  open:{
    transition:{
      staggerChildren:0.1,
    },
  },
  closed:{
  transition:{
      staggerChildren:0.05,
      staggerDirection:-1,
  }
  }
}

const itemVariants={
  open:{
    y:0,
    opacity:1,
    delay:0.5
    },
  closed:{
    y:50,
    opacity:0,
    delay:0.5
  }
}

const Links = () => {
  const items = [
    "Home",
    "Services",
    "Portfolio",
    "Contact",
    "About"
  ]
  return (
    <motion.div className='links' variants={linkVariants}>{items.map(item=>(
      <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale:1.2}} whileTap={{scale:0.95}}>{item}</motion.a>
    ))}
    </motion.div>
  )
}

export default Links
