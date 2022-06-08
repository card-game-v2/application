import './styles/App.css';
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './components/authentication/Login';
import Create from './components/authentication/Create';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <div className={`App app-${theme}`}>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login theme={theme} />} />
        <Route path="/create" element={<Create theme={theme} />} />
        <Route path="/profile" element={<h1>PROFILE</h1>} />
        <Route path="/*" element={<h1>ERROR</h1>} />
      </Routes>
    </div>
  );
}

export default App;
