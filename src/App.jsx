import './styles/App.css';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Login from './components/authentication/Login';
import Create from './components/authentication/Create';
import Profile from './components/pages/Profile';
import Navigation from './components/navigation/Navigation';

function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <div className={`App app-${theme}`}>
      <ToastContainer />
      <Navigation theme={theme} />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login theme={theme} />} />
        <Route path="/create" element={<Create theme={theme} />} />
        <Route path="/profile" element={<Profile theme={theme} />} />
        <Route path="/*" element={<h1>ERROR</h1>} />
      </Routes>
    </div>
  );
}

export default App;
