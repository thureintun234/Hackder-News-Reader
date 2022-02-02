import React from 'react';

const Item = ({ item, onRemoveItem }) => {
  return (
    <li style={{ display: 'flex' }}>
      <span style={{ width: '40%' }}>
        <a href={item.url}>{item.title}</a>
      </span>
      <span style={{ width: '30%' }}>{item.author}</span>
      <span style={{ width: '10%' }}>{item.num_comments}</span>
      <span style={{ width: '10%' }}>{item.points}</span>
      <span style={{ width: '10%' }}>
        <button type='button' onClick={() => onRemoveItem(item)}>Dismiss</button>
      </span>
    </li>
  );
};

export default Item;
