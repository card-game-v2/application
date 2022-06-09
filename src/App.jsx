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
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({
    username: '',
    userid: '',
    avatar: 'https://64.media.tumblr.com/24f93e6373bd3d6a27ec2e096658b865/tumblr_nwxt5iu24I1ujp48jo1_400.png',
  });

  return (
    <div className={`App app-${theme}`}>
      <ToastContainer />
      <Navigation theme={theme} />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login theme={theme} />} />
        <Route path="/create" element={<Create theme={theme} setAuth={setAuth} user={user} setUser={setUser} />} />
        <Route path="/profile" element={auth ? <Profile theme={theme} user={user} /> : <Navigate to="/login" />} />
        <Route path="/*" element={<h1>ERROR</h1>} />
      </Routes>
    </div>
  );
}

export default App;
