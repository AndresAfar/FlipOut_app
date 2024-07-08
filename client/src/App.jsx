import {BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'

import { Login } from './pages/Auth/Login';
import { Register } from './pages/Auth/Register';
import { Home } from './pages/Auth/Home';

import { Navbar } from './components/Navbar';

import './App.css'

function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/login' || '/register';

  return (
    <>
        {!hideNavbar && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    </>
  )
}

export default App
