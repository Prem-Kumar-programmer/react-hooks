import React, { useState, useEffect } from 'react';
import AddNoteForm from './AddNote'
import NoteList from './NoteList'
import NotesContext from './NotesContext'

const NoteApp = () => {





    const [notes, setNotes] = useState([])
   
   
    const removeNote = (title) => {
        setNotes(notes.filter((note) => note.title !== title))
    }

    useEffect(() => {
        const notesData = JSON.parse(localStorage.getItem('notes'))

        if (notesData) {
            setNotes(notesData)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    return (
        <NotesContext.Provider value={{ notes , setNotes }}>
            <h1>Notes</h1>
            <NoteList removeNote={removeNote}/>
            <AddNoteForm />
        </NotesContext.Provider>
    )
}



export default NoteApp;