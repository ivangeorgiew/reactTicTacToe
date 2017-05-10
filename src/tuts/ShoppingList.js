import React from 'react';

export default ShoppingList;




/* SHOPPINGLIST COMP */
function ShoppingList (props) {
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
