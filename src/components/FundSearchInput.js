import React from 'react';
import search from '../assets/search.png';
import './fundSearchInputStyles.css';

function Explore({onChange}) {

  return (
    <div className="inputContainer">
      <label className="label" htmlFor="search">
        <img src={search} alt="search"/>
        <span className="hidden">Search</span>
      </label>
      <input onChange={onChange} className="input" type="search" id="search" placeholder="Name, ticker or category"/>
    </div>
  );
}

export default Explore;
