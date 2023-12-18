import React from 'react';
import AddNoteForm from '../components/AddNoteForm';

const AddNotePage = () => {
  const handleAddNote = (newNote) => {
    console.log('Tambah catatan:', newNote);
    // Implementasi untuk menambahkan catatan ke server atau state
  };

  return (
    <div>
      <h1>Tambah Catatan</h1>
      <AddNoteForm onAddNote={handleAddNote} />
    </div>
  );
};

export default AddNotePage;
