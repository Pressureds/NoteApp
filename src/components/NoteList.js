// src/components/NoteList.js
import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({ notes, onDelete }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Your Notes</h2>
      {notes.map((note, index) => (
        <NoteItem key={index} note={note} onDelete={() => onDelete(index)} />
      ))}
    </div>
  );
};

export default NoteList;
