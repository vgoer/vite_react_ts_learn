import React from "react"
import { styled,css } from 'styled-components'


interface ButtonProps{
    color: string,
}

const JgButton: React.FC<ButtonProps> = ({color}) => {
    return (
        <div className="jgbutton">
            <button style={{color}}>aaa</button>
        </div>
    )
}

export default JgButton