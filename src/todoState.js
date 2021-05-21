import React, { useState } from 'react';
import './index.css';



// const NoteApp = () => {
//     const [notes, setNotes] = useState([])
//     const [title, setTitle] = useState('')

//     const addNote = (e) => {
//         e.preventDefault()
//         setNotes([
//             ...notes,
//             { title }
//         ])
//         setTitle('')
//     }

//     const removeNote = (title) => {
//         setNotes(notes.filter((note) => note.title !== title))
//     }

//     return (
//         <div>
//             <h1>Notes</h1>
//             {notes.map((note) => (
//                 <div key={note.id}>
//                     <h3>{note.title}</h3>
//                     <button onClick={() => removeNote(note.title)}>x</button>
//                 </div>
//             ))}
//             <p>Add note</p>
        
//             <form onSubmit={addNote}>
                
//                 <input value={title} onChange={(e) => setTitle(e.target.value)} />
//                 <button>add note</button>
//             </form>
//         </div>
//     )
// }


 const NoteApp = () => {
    const [notes, setNotes] = useState([])
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const addNote = (e) => {
        e.preventDefault()
        setNotes([
            ...notes,
            { title, body }
        ])
        setTitle('')
        setBody('')
    }

    const removeNote = (title) => {
        setNotes(notes.filter((note) => note.title !== title))
    }

    return (
        <div>
            <h1>Notes</h1>
            {notes.map((note) => (
                <div key={note.id}>
                    <h3>{note.title}</h3>
                    <p>{note.body}</p>
                    <button onClick={() => removeNote(note.title)}>x</button>
                </div>
            ))}
            <p>Add note</p>
        
            <form onSubmit={addNote}>

                <input value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <button>add note</button>
            </form>
        </div>
    )
} 



export default NoteApp;

















// const App = (props) => {
//     const [count, setCount] = useState(props.count)
//     const [text, setText] = useState('')

//     return (
//         <div>
//             <p>The current {text || 'count'} is {count}</p>
//             <button onClick={() => setCount(count - 1)}>-1</button>
//             <button onClick={() => setCount(props.count)}>reset</button>
//             <button onClick={() => setCount(count + 1)}>+1</button>
//             <input value={text} onChange={(e) => setText(e.target.value)}/>
//         </div>
//     )
// }
