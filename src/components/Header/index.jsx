import React from 'react';
import './style.css';

export default function Header() {
  return (
    <div className="header">
      <div className="title"><h1>Portfolio</h1></div>
      <div className="links">
      <div className="link"><a href="#about">About</a></div>
      <div className="link"><a href="#projects">Projects</a></div>
      <div className="link"><a href="#skills">Skills</a></div>
      <div className="link"><a href="#contact">Contact</a></div>
      </div>
    </div>
  )
}