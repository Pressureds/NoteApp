// src/components/NoteItem.js
import React from 'react';

const NoteItem = ({ note, onDelete }) => {
  return (
    <div className="border p-4 mb-4">
      <h3 className="text-lg font-semibold">{note.title}</h3>
      <p className="text-sm text-gray-500">{note.createdAt}</p>
      <p>{note.body}</p>
      <button className="bg-red-500 text-white py-1 px-2 mt-2" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default NoteItem;
