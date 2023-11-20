import React from 'react'
import s from './style.module.css'
import { motion } from "framer-motion"

export default function Container({children, className}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
     >
    <div className={[s.container, className].join(' ')}>
        {children}
    </div>
    </motion.div>
  )
}



// import React from 'react'
// import s from './style.module.css'

// import { motion } from "framer-motion"

// export default function Container({children, className}) {
//   return (
//     <motion.div
//     initial={{ x: 1000, opacity: 0 }}
//     animate={{ x: 0, opacity: 1}}
//     transition={{duration: 0.8 }}
//     // exit={{ x: -600, opacity: 0 }}
//     >
//       <div className={[s.container, className].join(' ')}>
//         {children}
//       </div>
//     </motion.div>
//   )
// }



// initial={{ opacity: 0 }}
// animate={{ opacity: 1 }}
// exit={{ opacity: 0 }}