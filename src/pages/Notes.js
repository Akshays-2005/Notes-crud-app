import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";
import useNotes from "../hooks/UseNotes";

const Notes = () => {

    // const [notes, setNotes] = useState([]);
    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(true);

    // const fetchNotes = async () => {
    //     setLoading(true);
    //     try {
    //         const res = await axios.get('http://localhost:3001/notes');
    //         setNotes(res.data);
    //         setError(null);
    //     }
    //     catch (err) {
    //         setError(err.message);
    //         setLoading(false);
    //     }
    //     finally {
    //         setLoading(false);
    //     }

    // }

    // const addNote = async (newNote) => {
    //     setLoading(true);
    //     try {
    //         const res = await axios.post('http://localhost:3001/notes', newNote);
    //         setNotes(prev => [...prev, res.data]);
    //         setError(null);
    //     }
    //     catch (err) {
    //         setError(err.message);
    //         setLoading(false);
    //     }
    //     finally {
    //         setLoading(false);
    //     }
    // }

    // const editNote = async (id, updatedNote) => {
    //     setLoading(true);
    //     try {
    //         const res = await axios.patch(`http://localhost:3001/notes/${id}`, updatedNote);
    //         setNotes(prev => prev.map(note => note.id === id ? res.data : note));
    //         setError(null);
    //     }
    //     catch (err) {
    //         setError(err.message);
    //         setLoading(false);
    //     }
    //     finally {
    //         setLoading(false);
    //     }
    // }

    // const deleteNote = async (id) => {
    //     setLoading(true);
    //     try {
    //         await axios.delete(`http://localhost:3001/notes/${id}`);
    //         setNotes(prev => prev.filter(note => note.id !== id));
    //         setError(null);
    //     }
    //     catch (err) {
    //         setError(err.message);
    //         setLoading(false);
    //     }
    //     finally {
    //         setLoading(false);
    //     }
    // }

    // useEffect(() => {
    //     fetchNotes();
    // }, []);

    const { notes, loading, error, createNote, editNote, deleteNoteById } = useNotes();

    { loading && <p>Loading...</p> }
    { error && <p className="error">{error}</p> }

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