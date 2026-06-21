import { useState, useEffect } from "react";
import axios from "axios";
import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";

const Notes = () => {

    const [notes, setNotes] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchNotes = async () => {
        setLoading(true);
        try {
            const res = await axios.get('http://localhost:3001/notes');
            setNotes(res.data);
            setError(null);
        }
        catch (err) {
            setError(err.message);
            setLoading(false);
        }
        finally {
            setLoading(false);
        }

    }

    const addNote = async (newNote) => {
        setLoading(true);
        try {
            const res = await axios.post('http://localhost:3001/notes', newNote);
            setNotes(prev => [...prev, res.data]);
            setError(null);
        }
        catch (err) {
            setError(err.message);
            setLoading(false);
        }
        finally {
            setLoading(false);
        }
    }

    const editNote = async (id, updatedNote) => {
        setLoading(true);
        try {
            const res = await axios.patch(`http://localhost:3001/notes/${id}`, updatedNote);
            setNotes(prev => prev.map(note => note.id === id ? res.data : note));
            setError(null);
        }
        catch (err) {
            setError(err.message);
            setLoading(false);
        }
        finally {
            setLoading(false);
        }
    }

    const deleteNote = async (id) => {
        setLoading(true);
        try {
            await axios.delete(`http://localhost:3001/notes/${id}`);
            setNotes(prev => prev.filter(note => note.id !== id));
            setError(null);
        }
        catch (err) {
            setError(err.message);
            setLoading(false);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchNotes();
    }, []);

    return (
        <div className="notes">
            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
            {!loading && !error && (
                <div>
                    <NoteForm addNote={addNote} />
                    <NoteList notes={notes} editNote={editNote} deleteNote={deleteNote} />
                </div>
            )}
        </div>
    );
}
export default Notes;