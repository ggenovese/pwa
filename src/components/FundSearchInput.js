import React from 'react';
import search from '../assets/search.png';

function Explore({onChange}) {
  const styles = {
    inputContainer: {
      padding: '34.5px 50px',
      borderRadius: '5px',
      backgroundColor: '#fff',
      width: '100%',
    },
    label: {
      width: '20px',
      position: 'absolute',
      top: '50%',
      left: '60px',
      transform: 'translateY(-50%)'
    },
    input: {
      border: '1px solid #c1c9ce',
      backgroundColor: '#f4f7fa',
      padding: '10px 10px 10px 40px',
      fontSize: '24px',
      fontWeight: '900',
      width: '100%',
    }
  };
  return (
    <div style={styles.inputContainer}>
      <label style={styles.label} htmlFor="search">
        <img src={search} alt="search"/>
        <span className="hidden">Search</span>
      </label>
      <input onChange={onChange} style={styles.input} type="search" id="search" placeholder="Name, ticker or category"/>
    </div>
  );
}

export default Explore;
