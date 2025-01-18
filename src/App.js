import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // For routing
import Home from './pages/Home'; // Home page
import Dashboard from './pages/Dashboard'; // Dashboard page
import Login from './pages/Login'; // Login page
import Register from './pages/Register'; // Registration page
import Group from './pages/Group'; // Group management page
import Messages from './pages/Messages'; // Messaging page
import NotFound from './pages/NotFound'; // 404 page
import './App.css'; // Global styles

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
