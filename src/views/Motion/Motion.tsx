import React from "react"
import styled from 'styled-components'
import { motion } from 'framer-motion'


const MotionButton: React.FC = styled(motion.div)`
    width:100px;
    height:100px;
    border:none;
    cursor: pointer;
    background-color:#0dbff7;
    border-radius:20px;
`


const Motion: React.FC  = () => {
    return (
        <div className="box" style={{backgroundColor:'blue'}}>
            <motion.div
                style={{
                    width:100,
                    height:100,  
                    backgroundColor:'white',
                    borderRadius:'20px'
                }}
                // 以下三个属性
                // 是motion组件提供的能力
                
                // 实现鼠标悬浮的效果
                whileHover={{
                    rotate:45,
                    scale:1.2
                }}
                // 让元素可以随意拖拽
                drag
                // 元素放手后会自动回到起始点
                dragSnapToOrigin
                >
            </motion.div>
            <MotionButton  WhileHover={{ rotate:45, scale:3 }} drag dragSnapToOrigin />
        </div>
        
    )
}

export default Motion