import React from 'react';

const NoteItem = ({ note, onDelete }) => {
  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <button onClick={() => onDelete(note.id)}>Hapus</button>
    </div>
  );
};

export default NoteItem;
