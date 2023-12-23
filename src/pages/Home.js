import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Catatan from '../components/Catatan';

const Home = () => {
  const [catatanData, setCatatanData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleHapusCatatan = (id) => {
    const catatanBaru = catatanData.filter((catatan) => catatan.id !== id);
    setCatatanData(catatanBaru);
  };

  const handleTambahCatatan = (catatanBaru) => {
    setCatatanData([...catatanData, catatanBaru]);
  };

  return (
    <div className="container mt-4">
      <h1>Daftar Catatan</h1>
      <div className="mb-3">
        <label htmlFor="search" className="form-label">
          Cari Judul Catatan
        </label>
        <input
          type="text"
          className="form-control"
          id="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {catatanData
        .filter((catatan) =>
          catatan.judul.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((catatan) => (
          <Catatan
            key={catatan.id}
            catatan={catatan}
            onDelete={() => handleHapusCatatan(catatan.id)}
          />
        ))}
      <Link to="/tambah-catatan" className="btn btn-primary">
        Tambah Catatan
      </Link>
      <Link to="/login" className="btn btn-secondary ms-2">
        Login
      </Link>
      <Link to="/register" className="btn btn-secondary ms-2">
        Register
      </Link>
    </div>
  );
};

export default Home;
