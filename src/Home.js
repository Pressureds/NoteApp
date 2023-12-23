import React from 'react';
import Catatan from './components/Catatan';
import './Home.css';

const Home = () => {
  const daftarCatatan = [
    { title: 'Catatan 1', createdAt: '2023-01-01', body: 'Isi catatan 1' },
    { title: 'Catatan 2', createdAt: '2023-01-02', body: 'Isi catatan 2' },
    { title: 'Catatan 3', createdAt: '2023-01-03', body: 'Isi catatan 3' },

  ];

  return (
    <div className="home-container">
      <h1>Daftar Catatan</h1>
      {daftarCatatan.map((catatan, index) => (
        <Catatan key={index} {...catatan} />
      ))}
    </div>
  );
};

export default Home;
