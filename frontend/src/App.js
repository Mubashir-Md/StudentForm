import './App.css';
import { Routes, Route, BrowserRouter, Form } from 'react-router-dom';
import StudentForm from './components/StudentForm';
import AdminLogin from './components/AdminLogin';
import DataEntry from './components/DataEntry';
import GLogin from './components/GLogin';
import MegaForm from './components/MegaForm';
import { useState } from 'react';
import ResultPage from './components/ResultPage';

function App() {
  
  return (
    
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<GLogin />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/form" element={<MegaForm />} />

            <Route path="/data-entry" element={<DataEntry />} />
            <Route path="/result" element={<ResultPage />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;




