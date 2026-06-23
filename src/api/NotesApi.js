import api from "./axios";

export const getNotes = async () =>{
    const res=await api.get('/notes');
    return res.data.slice(0,10);
};

export const addNote = async (newNote) => {
    const res = await api.post('/notes', newNote);
    return res.data;
};

export const updateNote = async(id,updatedNote)=>{
    const res=await api.patch(`/notes/${id}`, updatedNote);
    return res.data;
};

export const deleteNote = async (id)=>{
    await api.delete(`/notes/${id}`);
};