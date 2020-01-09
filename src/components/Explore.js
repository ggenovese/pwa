import React, {useEffect, useState} from 'react';
import './exploreStyles.css';

function Explore({data}) {

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('data', data);
    if(data.funds) setCount(data.funds.length)
  }, [data])

  return (
    <p className="explore">
      Explore {count} funds
    </p>
  );
}

export default Explore;
