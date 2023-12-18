// src/pages/Home.js
import React, { useState } from 'react';
import NoteList from '../components/NoteList';

const Home = () => {
  const [notes, setNotes] = useState([
    { title: 'Note 1', body: 'This is the body of note 1', createdAt: '2023-01-01' },
    // Add more sample notes as needed
  ]);

  const handleDelete = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">My Note App</h1>
      <NoteList notes={notes} onDelete={handleDelete} />
    </div>
  );
};

export default Home;
