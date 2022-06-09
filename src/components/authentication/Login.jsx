import './Authentication.css';
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = ({ theme }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // get username from the form data
    // get userdata from the server using the username
    // if the form data username is not valid display error message
    // if the form data username is valid, check if the passwords match
    // if the passwords do not match display error message
    // if the passwords match, redirect to the profile page
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
