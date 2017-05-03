import React from 'react';

const ShoppingList = function(props) {
  return (
    <div className='shopping-list'>
      <h1>Shopping List for {props.name}</h1>
      <ul>
        <li>Instagram</li>
        <li>WhatsApp</li>
        <li>Facebook</li>
      </ul>
    </div>
  );
};

export default ShoppingList;
