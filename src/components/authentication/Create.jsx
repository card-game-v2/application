import './Authentication.css';
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Create = ({ theme }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // check if both passwords match
    // check if the username is already taken
    // if the username is taken, display error message
    // if the username is not taken, create the user and redirect to the profile page
    navigate('/profile');
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
        <Link to="/login">
          <p>Login to your account!</p>
        </Link>
      </form>
    </section>
  );
};

export default Create;
