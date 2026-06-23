import {useState} from 'react';

const NoteForm = ({createNote}) => {

    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');

    const submitHandler = (e) =>{
        e.preventDefault();
        
        const newNote={title,description};
        createNote(newNote);

        setTitle('');
        setDescription('');
    }

    return ( 
        <div className="note-form">
            <h2>Create New Note</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                </div>
                <div>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description"></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
     );
}
 
export default NoteForm;