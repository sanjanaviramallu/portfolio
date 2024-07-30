import React from 'react';
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import { Routes,Route } from 'react-router-dom';
import Skills from './pages/Skills';
import About from './pages/About Me';
import Resume from './pages/Resume';


function App() {
  return (
    <div className=''>
      <Routes>
        <Route element={<Dashboard/>}path="/Dashboard"> </Route>
        <Route element={<Contact/>}path="/Contact"> </Route>
        <Route element={<Skills/>}path="/Skills"> </Route>
        <Route element={<About Me/>}path="/About Me"> </Route>
        <Route element={<Resume/>}path="/Resume"> </Route>
        
      </Routes>
    </div>
  )
}
export default App

   
     
      