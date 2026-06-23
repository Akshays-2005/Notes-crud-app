import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";
import useNotes from "../hooks/UseNotes";

const Notes = () => {

    const { notes, loading, error, createNote, editNote, deleteNoteById } = useNotes();

    if(loading){
        return <p>Loading...</p>
    }
    if(error){
        return <p className="error">{error}</p>
    }

    return (
        <div className="notes">
            {!loading && !error && (
                <div>
                    <NoteForm createNote={createNote} />
                    <NoteList notes={notes} editNote={editNote} deleteNote={deleteNoteById} />
                </div>
            )}
        </div>
    );
}
export default Notes;