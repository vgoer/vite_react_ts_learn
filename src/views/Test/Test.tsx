import React from "react"
import { motion } from 'framer-motion'

const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
    
}
const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
}

const Test :React.FC = () => {
    return (
        <motion.ul
            initial="hidden"
            animate="visible"
            variants={list}
            transition={
            {staggerChildren:0.5}
        }
        >
            <motion.li variants={item} />
            <motion.li variants={item} />
            <motion.li variants={item} />
        </motion.ul>
    )
}



export default Test