
import React, { useEffect, useState } from 'react'

const App =() =>{

    
    const [count ,  setCount] = useState(9)
    const [text, setText] = useState('')

const increment = () =>{
    setCount(count+1)
}


useEffect(() =>
{
    console.log('useEffect runned')
},[count])

    return(
        <div>
            <p>The current {text || "Count"} value is {count}</p>
            <button onClick={increment}>+1</button>
            <input value={text} onChange={(e) =>setText(e.target.value) } />
        </div>
    )
}

export default App