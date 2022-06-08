import './styles/App.css';
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './components/authentication/Login';
import Create from './components/authentication/Create';

import Navigation from './components/navigation/Navigation';

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <div className={`App app-${theme}`}>
      <Navigation theme={theme} />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login theme={theme} />} />
        <Route path="/create" element={<Create theme={theme} />} />
        <Route path="/profile" element={<div></div>} />
        <Route path="/*" element={<h1>ERROR</h1>} />
      </Routes>
    </div>
  );
}

export default App;
