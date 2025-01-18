import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import './App.css'; 



import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Group from './Pages/Group'
import Messages from './Pages/Messages';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Default/Home page */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/group" element={<Group />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="*" element={<NotFound />} /> {/* 404 Page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
