import './Authentication.css';
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { createID } from '../../utils/function';
import { getUserByUsername, postUser } from '../../utils/connection';

const Create = ({ theme, setAuth, setUser }) => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (/^[0-9]$/.test(e.target[0].value[0])) {
      toast.error('Username must start with a letter');
      return;
    }
    if (e.target[0].value.length < 4) {
      toast.error('Username must be at least 4 characters');
      return;
    }
    if (!/^[a-z][a-z0-9]{3,}$/.test(e.target[0].value.toLowerCase())) {
      toast.error('Username can not contain special characters');
      return;
    }
    if (e.target[1].value.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }
    if (e.target[1].value !== e.target[2].value) {
      toast.error('Passwords do not match');
      return;
    }
    const { message } = await getUserByUsername(e.target[0].value);
    if (message === 'User not found') {
      const userid = await createID();
      await postUser(
        userid,
        e.target[0].value,
        e.target[1].value,
        'https://64.media.tumblr.com/24f93e6373bd3d6a27ec2e096658b865/tumblr_nwxt5iu24I1ujp48jo1_400.png'
      );
      toast.success('Account created');
      setAuth(true);
      setUser({
        username: e.target[0].value,
        userid: userid,
        avatar: 'https://64.media.tumblr.com/24f93e6373bd3d6a27ec2e096658b865/tumblr_nwxt5iu24I1ujp48jo1_400.png',
      });
      navigate('/profile');
    } else {
      toast.error('Username already exists');
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
