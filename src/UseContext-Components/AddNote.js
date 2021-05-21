import React , { useState , useContext } from 'react'
import NotesContext from './NotesContext'

const AddNoteForm = () =>{

    const {notes} = useContext(NotesContext)
    const {setNotes} = useContext(NotesContext)

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

            return(
            <div>
           <p>Add note</p>
            <form onSubmit={addNote}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <button>add note</button>
            </form>
            </div>
            )
}

export { AddNoteForm as default }