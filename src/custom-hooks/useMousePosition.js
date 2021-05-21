import {useState, useEffect} from 'react'



// here I created our custom hook 
// we all know that the hook is nothing more it's just a function.
//So I created a function named as useMousePosition to get the position in x and y axis
// In our custome hook i just used useState and useEffect hooks, which are build-in hooks.
//I'm using this custom hook in mouse position.js file
//To check this render <App /> of "./custom-hooks/mousePosition " in index.js  



const useMousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({
                x: e.pageX,
                y: e.pageY
            })
        }

        document.addEventListener('mousemove', handleMouseMove)

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return position
}

export { useMousePosition as default }