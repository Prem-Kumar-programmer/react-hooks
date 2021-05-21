import React from 'react'
import useMousePosition from './useMousePosition'


const MousePosition =  () =>{

    const position = useMousePosition()

    return(
        <div>
            <p>The Mouse position in x : {position.x} </p>
            <p>The Mouse position in y : {position.y} </p>
            
        </div>
    )
}

export default MousePosition