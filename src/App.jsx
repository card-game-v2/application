import './styles/App.css';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Login from './components/authentication/Login';
import Create from './components/authentication/Create';
import Profile from './components/pages/Profile';
import Collection from './components/pages/Collection';
import Navigation from './components/navigation/Navigation';

function App() {
  const [theme, setTheme] = useState('dark');
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(undefined);

  return (
    <div className={`App app-${theme}`}>
      <ToastContainer />
      <Navigation theme={theme} setTheme={setTheme} user={user} />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login theme={theme} setAuth={setAuth} setUser={setUser} />} />
        <Route path="/create" element={<Create theme={theme} setAuth={setAuth} setUser={setUser} />} />
        <Route path="/profile" element={auth ? <Profile theme={theme} user={user} /> : <Navigate to="/login" />} />
        <Route
          path="/collection"
          element={auth ? <Collection theme={theme} user={user} /> : <Navigate to="/login" />}
        />
        <Route path="/*" element={<h1>ERROR</h1>} />
      </Routes>
    </div>
  );
}

export default App;
