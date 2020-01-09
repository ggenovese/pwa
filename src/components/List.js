import React from 'react';
import './listStyles.css';

function List({items, handleClick}) {

  return (
    <ul className="list">
        {items.map(item => (
            <li className="listItem" onClick={() => handleClick(item.id)} key={item.id}>{item.name}</li>
        ))}
    </ul>
  );
}

export default List;
