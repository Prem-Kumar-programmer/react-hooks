import React, { useState, useEffect } from 'react';
import AddNoteForm from './AddNote'
import NoteList from './NoteList'

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
        <div>
            <h1>Notes</h1>
            <NoteList notes={notes} removeNote={removeNote} />
            <AddNoteForm setNotes={setNotes} notes={notes} />
        </div>
    )
}



export default NoteApp;