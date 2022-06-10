import './Loading.css';
import React from 'react';

const Loading = ({ theme }) => {
  return (
    <section className={`loading loading-${theme}`}>
      <div className={`sk-cube-grid sk-cube-grid-${theme}`}>
        <div className={`sk-cube sk-cube-${theme} sk-cube1`}></div>
        <div className={`sk-cube sk-cube-${theme} sk-cube2`}></div>
        <div className={`sk-cube sk-cube-${theme} sk-cube3`}></div>
        <div className={`sk-cube sk-cube-${theme} sk-cube4`}></div>
        <div className={`sk-cube sk-cube-${theme} sk-cube5`}></div>
        <div className={`sk-cube sk-cube-${theme} sk-cube6`}></div>
        <div className={`sk-cube sk-cube-${theme} sk-cube7`}></div>
        <div className={`sk-cube sk-cube-${theme} sk-cube8`}></div>
        <div className={`sk-cube sk-cube-${theme} sk-cube9`}></div>
      </div>
    </section>
  );
};

export default Loading;
