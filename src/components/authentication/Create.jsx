import './Authentication.css';
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { createUniqueUserID, encryptPassword } from '../../utils/function';
import { getUserByUsername, postUser } from '../../utils/connection';

const Create = ({ theme, setAuth, setUser }) => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const username = e.target[0].value;
      const password = e.target[1].value;
      const password2 = e.target[2].value;

      if (/^[0-9]$/.test(username[0])) return toast.error('Username must start with a letter');
      if (username.length < 4) return toast.error('Username must be at least 4 characters');
      if (username.length > 14) return toast.error('Username must be less than 15 characters');
      if (!/^[a-z][a-z0-9]{3,}$/.test(username.toLowerCase()))
        return toast.error('Username can not contain special characters');
      if (password.length < 6) return toast.error('Password must be at least 6 characters');
      if (password.length > 64) return toast.error('Password must be less than 65 characters');
      if (password !== password2) return toast.error('Passwords do not match');

      const encryptedPassword = await encryptPassword(password);
      const { data } = await getUserByUsername(username);
      if (data.message === 'success') return toast.error('Username already exists');

      const user_id = await createUniqueUserID();
      const avatar_url = 'https://i.pinimg.com/originals/ff/dd/c9/ffddc9365ea7fe9cf0bf5548249fc6e4.jpg';
      const join_date = Date.now();
      const currency = 1000;

      await postUser(user_id, username, encryptedPassword, avatar_url, join_date, currency);
      toast.success('Account created');
      setAuth(true);
      setUser({ user_id, username, encryptedPassword, avatar_url, join_date, currency });
      navigate('/profile');
    } catch (e) {
      toast.error('Internal server error');
    }
  };

  return (
    <section className={`authentication authentication-${theme}`}>
      <form className={`authentication-form authentication-form-${theme}`} onSubmit={(e) => handleSubmit(e)}>
        <h1 className={`authentication-logo`}>Application Logo</h1>
        <input className={`authentication-input input-${theme}`} type="text" placeholder="username" />
        <input className={`authentication-input input-${theme}`} type="password" placeholder="password" />
        <input className={`authentication-input input-${theme}`} type="password" placeholder="retype password" />
        <button className={`authentication-submit authentication-submit-${theme}`} type="submit">
          Create an account
        </button>
        <Link className={`authentication-redirect`} to="/login">
          <p>Login to your account!</p>
        </Link>
      </form>
    </section>
  );
};

export default Create;
