import React, { useState } from 'react';

const AddNoteForm = ({ onAddNote }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddNote({ title, body });
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Judul:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Isi Catatan:
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </label>
      <button type="submit">Tambah Catatan</button>
    </form>
  );
};

export default AddNoteForm;
