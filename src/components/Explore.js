import React, {useEffect, useState} from 'react';

function Explore({data}) {
  const styles = {
    fontSize: '58px',
    color: '#222',
    marginTop: '50px',
    marginBottom: '24px',
    fontWeight: '300',
    textAlign: 'center'
  };

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('data', data);
    if(data.funds) setCount(data.funds.length)
  }, [data])

  return (
    <p style={styles}>
      Explore {count} funds
    </p>
  );
}

export default Explore;
