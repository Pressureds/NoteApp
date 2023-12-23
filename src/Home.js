// Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Catatan from './components/Catatan';
import TambahCatatan from './TambahCatatan';

const Home = ({ navigate }) => {
  const [daftarCatatan, setDaftarCatatan] = useState([
    { title: 'Catatan 1', createdAt: '2023-01-01', body: 'Isi catatan 1' },
    { title: 'Catatan 2', createdAt: '2023-01-02', body: 'Isi catatan 2' },

  ]);

  const handleUpdateCatatan = (newCatatan) => {
    setDaftarCatatan((prevDaftarCatatan) => [
      ...prevDaftarCatatan,
      newCatatan,
    ]);
  };

  useEffect(() => {
  }, [daftarCatatan]);

  return (
    <div className="container mt-4">
      <h1>Daftar Catatan</h1>
      <Link to="/tambah-catatan" className="btn btn-primary mb-3">
        Tambah Catatan
      </Link>
      {daftarCatatan.map((catatan, index) => (
        <Catatan key={index} {...catatan} />
      ))}
      {}
      <TambahCatatan onUpdateCatatan={handleUpdateCatatan} navigate={navigate} />
    </div>
  );
};

export default Home;
