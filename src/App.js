import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import TambahCatatan from './TambahCatatan';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/tambah-catatan" element={<TambahCatatan />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
