import './Authentication.css';
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { getUserByUsername } from '../../utils/connection';

const Login = ({ theme, setAuth, setUser }) => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target[0].value.length < 1 || e.target[1].value.length < 1) {
      toast.error('Invalid username or password');
      return;
    }
    const data = await getUserByUsername(e.target[0].value);
    if (data.message === 'User not found' || e.target[1].value !== data.data.user_password) {
      toast.error('Invalid username or password');
      return;
    }
    toast.success('Login successful');
    setAuth(true);
    setUser({
      username: data.data.user_name,
      userid: data.data.user_id,
      avatar: data.data.user_avatar_url,
    });
    navigate('/profile');
  };

  return (
    <section className={`authentication authentication-${theme}`}>
      <form className={`authentication-form authentication-form-${theme}`} onSubmit={(e) => handleSubmit(e)}>
        <h1 className={`authentication-logo`}>Application Logo</h1>
        <input className={`authentication-input input-${theme}`} type="text" placeholder="username" />
        <input className={`authentication-input input-${theme}`} type="password" placeholder="password" />
        <button className={`authentication-submit authentication-submit-${theme}`} type="submit">
          Login
        </button>
        <Link className={`authentication-redirect`} to="/create">
          <p>Create an account!</p>
        </Link>
      </form>
    </section>
  );
};

export default Login;
