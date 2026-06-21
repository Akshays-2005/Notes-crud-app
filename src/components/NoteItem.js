const NoteItem = ({ note, editNote, deleteNote }) => {

    const editHandler = () => {
        const updatedTitle = prompt("Enter new title", note.title);
        const updatedDescription = prompt("Enter new description", note.description);

        editNote(note.id, {
            title: updatedTitle,
            description: updatedDescription
        });
    };

    const deleteHandler = () => {
        deleteNote(note.id);
    }

    return (
        <div className="note-item">
            <h3>{note.title}</h3>
            <p>{note.description}</p>
            <button onClick={editHandler}>Edit</button>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    );
}

export default NoteItem;