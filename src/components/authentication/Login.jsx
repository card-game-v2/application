import './Authentication.css';
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { getUserByUsername } from '../../utils/connection';

const Login = ({ theme, setAuth, setUser }) => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;

    if (username.length < 1 || password.length < 1) return toast.error('Invalid username or password');

    const { data } = await getUserByUsername(e.target[0].value);
    if (data.message === 'error' || password !== data.data.password) return toast.error('Invalid username or password');

    toast.success('Login successful');
    setAuth(true);
    setUser({
      user_id: data.data.user_id,
      username: data.data.username,
      password: data.data.password,
      avatar_url: data.data.avatar_url,
      join_date: data.data.join_date,
      currency: data.data.currency,
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
