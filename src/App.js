import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes, useLocation, Navigate } from 'react-router-dom'
import Home from './templates/Home';
import Template1 from "./templates/template-1/index"

function App() {
  return (
   <>
     <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/template-1' element={<Template1 />} />

     </Routes>
   
   </>
  );
}

export default App;
