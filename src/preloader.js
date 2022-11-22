import React from 'react'
import {motion} from "framer-motion"

export default function Preloader() {
  return (
<div className='preloaderbox'>
    <div>
    <motion.div 
    animate={{y:[10,-10,10,-10 , 10]}}
    initial={{y:-10}}
    transition={{type:"spring" , repeat : Infinity}}
    
    className='preloader'></motion.div>
    <hr/>
    </div>
</div>
  )
}
