import React, { useState } from 'react';

const TambahCatatan = ({ onTambahCatatan }) => {
  const [judul, setJudul] = useState('');
  const [isi, setIsi] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!judul || !isi) {
      alert('Judul dan isi catatan harus diisi');
      return;
    }
    const catatanBaru = {
      id: new Date().getTime(),
      judul,
      isi,
    };
    onTambahCatatan(catatanBaru);
    setJudul('');
    setIsi('');
  };

  return (
    <div className="container mt-4">
      <h1>Tambah Catatan</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="judul" className="form-label">
            Judul Catatan
          </label>
          <input
            type="text"
            className="form-control"
            id="judul"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="isi" className="form-label">
            Isi Catatan
          </label>
          <textarea
            className="form-control"
            id="isi"
            rows="4"
            value={isi}
            onChange={(e) => setIsi(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Tambah
        </button>
      </form>
    </div>
  );
};

export default TambahCatatan;
