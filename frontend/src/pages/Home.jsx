import { useState, useEffect } from "react"
import api from "../api";
import "../styles/Home.css"
import "../styles/Note.css"
import Note from "../components/Note"

import {Helmet} from "react-helmet-async"

function Home() {
    const [notes, setNotes] = useState([])
    const [content, setContent] = useState("")
    const [title, setTitle] = useState("")

    useEffect(() => {
        getNotes()
    },[])

    const getNotes = () => {
        api
            .get("/api/notes/")
            .then((res) => res.data)
            .then((data) => {setNotes(data); console.log(data)})
            .catch((err) => alert(err));
    }

    const deleteNote = (id) => {
        api
            .delete(`/api/notes/delete/${id}/`)
            .then((res) => {
                if(res.status === 204) alert("Note deleted!");
                else alert("Failed to delete note.");
                getNotes();
            })
            .catch((err) => alert(err));
    }

    const createNote = (e) => {
        e.preventDefault()
        api
            .post("/api/notes/", {content, title})
            .then((res) => {
                if(res.status === 201) alert("Note created!");
                else alert("Failed to create note.");
                getNotes();
            })
            .catch((err) => alert(err));
    }

    return <>
        <Helmet>
            <title>Home</title>
            <meta name="description" content="This is the Homepage" />
            <link rel="canonical" href="/" />
        </Helmet>
        <div>
            <h2>Home</h2>
            {notes.map((note) => (
                <Note note={note} onDelete={deleteNote} key={note.id}/>
            ))}
        </div>
        <h2>Create a Note</h2>
        <form onSubmit={createNote}>
            <label htmlFor="title">Title:</label>
            <br />
            <input 
                type="text" 
                name="title" 
                id="title" 
                required 
                onChange={(e) => setTitle(e.target.value)} 
                value={title}
            />
            <label htmlFor="content">content:</label>
            <br />
            <textarea 
                name="content" 
                id="content" 
                cols="30" 
                rows="10" 
                required 
                onChange={(e) => setContent(e.target.value)} 
                value={content}
            />
            <br />
            <input 
                type="submit" 
                value="Submit" 
            />
        </form>
    </>
}

export default Home