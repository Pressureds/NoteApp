import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TambahCatatan from './pages/TambahCatatan';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  const [catatanData, setCatatanData] = useState([]);

  const handleTambahCatatan = (catatanBaru) => {
    setCatatanData([...catatanData, catatanBaru]);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={<Home catatanData={catatanData} setCatatanData={setCatatanData} />}
          />
          <Route
            path="/tambah-catatan"
            element={<TambahCatatan onTambahCatatan={handleTambahCatatan} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
