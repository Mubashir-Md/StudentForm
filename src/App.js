import './App.css';
import { Routes, Route, BrowserRouter, Form } from 'react-router-dom';
import StudentForm from './components/StudentForm';
import AdminLogin from './components/AdminLogin';
import DataEntry from './components/DataEntry';
import GLogin from './components/GLogin';
import MegaForm from './components/MegaForm';

function App() {
  const sub = [1,2,3,4,5];
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GLogin/>} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/form" element={<MegaForm />} />
        
              <Route path='/form1' element = {<StudentForm />}/>
              <Route path='/form2' element = {<StudentForm/>}/>
              <Route path='/form3' element = {<StudentForm/>}/>
              <Route path='/form4' element = {<StudentForm/>}/>

          <Route path="/data-entry" element={<DataEntry />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
