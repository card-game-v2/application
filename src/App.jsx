import './styles/App.css';
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <div className={`App app-${theme}`}>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<h1>LOGIN</h1>} />
        <Route path="/signup" element={<h1>SIGNUP</h1>} />
        <Route path="/profile" element={<h1>PROFILE</h1>} />
        <Route path="/*" element={<h1>ERROR</h1>} />
      </Routes>
    </div>
  );
}

export default App;
