import {useState, useEffect} from "react";
import {getNotes, addNote, updateNote, deleteNote} from "../api/NotesApi";

const useNotes =()=>{

    const [notes, setNotes] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetchNotes();
    },[]);

    const fetchNotes= async ()=>{
        setLoading(true);
        try{
            const data= await getNotes();
            setNotes(data);
            setError(null);
        }
        catch(err){
            setError(err.message);
        }
        finally{
            setLoading(false);
        }
    }

    const createNote= async (newNote)=>{
        setLoading(true);
        try{
            const newNoteData= await addNote(newNote);
            setNotes(prev=>[...prev, newNoteData]);
            setError(null);
        }
        catch(err){
            setError(err.message);
        }   
        finally{
            setLoading(false);
        }
    }

    const editNote= async (id,updatedNote)=>{
        setLoading(true);
        try{
            const updatedNoteData= await updateNote(id,updatedNote);
            setNotes(prev=>prev.map(note=>note.id===id?updatedNoteData:note));
            setError(null);
        }
        catch(err){
            setError(err.message);
        }
        finally{
            setLoading(false);
        }
    }

    const deleteNoteById= async (id)=>{
        setLoading(true);   
        try{
            await deleteNote(id);
            setNotes(prev=>prev.filter(note=>note.id!==id));
            setError(null);
        }
        catch(err){
            setError(err.message);
        }
        finally{
            setLoading(false);
        }
    }

    return {notes, error, loading, createNote, editNote, deleteNoteById};
};

export default useNotes;