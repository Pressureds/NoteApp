import React, { useState, useEffect } from 'react';
import NoteList from '../components/NoteList';

const HomePage = () => {
  const [notes, setNotes] = useState([
    { id: 1, title: 'Catatan 1', body: 'Isi catatan 1' },
    { id: 2, title: 'Catatan 2', body: 'Isi catatan 2' },
  ]);

  const handleDeleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <div>
      <h1>Daftar Catatan</h1>
      <NoteList notes={notes} onDelete={handleDeleteNote} />
    </div>
  );
};

export default HomePage;
