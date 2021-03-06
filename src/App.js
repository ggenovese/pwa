import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Explore from './components/Explore';
import FundSearchInput from './components/FundSearchInput';
import List from './components/List';
import Fund from './components/Fund';

function App() {
  const [data, setData] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [currentFund, setCurrentFund] = useState(null);

  useEffect(() => {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://pwa-test-e8932.firebaseapp.com/data.json'
  fetch(proxyUrl + targetUrl)
    .then(res => res.json())
    .then(response => {
      setData(response);
    }).catch(err => {
      console.log('ERROR:', err);
    });
  }, []);

  const handleCurrentFund = (id) => {
    const current = data.funds.find(fund => fund.id === id);
    setSearchResults([]);
    setCurrentFund(current);
  };

  const handleDataSearch = (e) => {
    const value = e.target.value;

    if(data.funds) {
      const results = data.funds.filter(fund => fund.name.includes(value));
      setSearchResults(results);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-body">
        <Explore data={data}/>
        <div className="searchContainer">
          <FundSearchInput onChange={handleDataSearch}/>
          {searchResults.length > 0 && (
            <List items={searchResults} handleClick={handleCurrentFund}/>
          )}
        </div>
        
        {currentFund && (
          <div className="fundContainer">
            <Fund fund={currentFund}/>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
