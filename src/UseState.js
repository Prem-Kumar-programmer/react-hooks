import React, { useState } from 'react';


//      Adding -1 and reset button to component
//
//  initial count to be configured using a count prop (default to 0)
//  Add "-1" button to reduce count by 1
//  Add "reset" button to reset count
//  Test your work!

const App = (props) => {
    const [count, setCount] = useState(props.count)

    return (
        <div>
            <p>The current count is {count}</p>
            <button onClick={() => setCount(count - 1)}>-1</button>
            <button onClick={() => setCount(props.count)}>reset</button>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    )
}

// we're using this to make the count's default prop 
App.defaultProps = {
    count: 0
}

export default App;
