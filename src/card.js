import React from 'react'
import {motion}  from "framer-motion"

export default function Card({person}) {

    // console.log(person)

  return (
    <motion.div
        animate={{scale : 1}}
        initial={{scale : 0}}
        transition={{duration : .2}}
    
    
    className='card'>
        <div className='infocontainer'>
            <img src={person.picture} className='image' />
            <p>{person.firstName}</p>
            <button> VIEW PROFILE</button>
            
        </div>

    </motion.div>
  ) 
}
