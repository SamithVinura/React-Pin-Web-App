
import React, { useEffect } from 'react';
import './App.css';
import {Routes,Route,useNavigate } from 'react-router-dom'
import Home from './container/Home';
import Login from './components/Login';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

    if (!User) navigate('/login');
  }, []);
  return (
    <Routes>
      <Route path='login' element={<Login/>}/>
      <Route path='/*' element={<Home/>}/>
    </Routes>
  );
}

export default App;
