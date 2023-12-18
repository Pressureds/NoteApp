// src/components/AddNoteForm.js
import React, { useState, useEffect } from 'react';

const AddNoteForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    setIsButtonEnabled(title.trim() !== '' && body.trim() !== '');
  }, [title, body]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      title,
      body,
      createdAt: new Date().toLocaleString(),
    };
    onAdd(newNote);
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <label className="block mb-2">
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-1"
        />
      </label>
      <label className="block mb-2">
        Body:
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="border p-1"
        />
      </label>
      <button
        type="submit"
        className={`bg-blue-500 text-white py-2 px-4 ${isButtonEnabled ? '' : 'opacity-50 cursor-not-allowed'}`}
        disabled={!isButtonEnabled}
      >
        Add Note
      </button>
    </form>
  );
};

export default AddNoteForm;
