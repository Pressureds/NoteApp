// src/pages/AddNote.js
import React from 'react';
import AddNoteForm from '../components/AddNoteForm';

const AddNote = ({ onAdd }) => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Add a New Note</h1>
      <AddNoteForm onAdd={onAdd} />
    </div>
  );
};

export default AddNote;
