import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Game from './components/Game';




/* RENDER FUNC */
const render = function(Comp, props={}) {
  return ReactDOM.render(
    <Comp {...props}/>,
    document.getElementById('root')
  );
};




/* CHOOSE SYMBOL COMP */
const ChooseSymbol = function(props) {

  /* CLICK FUNC */
  const handleClick = function(startSym, vsComp) {
    const xIsNext = startSym === 'X';

    return render(Game, {
      state: {
        history: [{squares: Array(9).fill(null)}],
        stepNumber: 0,
        startSym,
        xIsNext,
        vsComp
      },
      render: render.bind(null, Game)
    });
  };



  /* RETURNS CHOOSE SYMBOL COMP*/
  return (
    <div className='status'>
      <h3> Choose symbol </h3>
      <button className='square' 
        onClick={() => handleClick('X', true)}>X</button>
      <button className='square'
        onClick={() => handleClick('O', true)}>O</button>
    </div>
  );
};




/* INITIAL RENDER */
render(ChooseSymbol);




/* FROM HERE ON ARE OTHER TUTS */

/*
 * import ShoppingList from './components/ShoppingList';
 * render(ShoppingList, {name: 'Mark'});
 */

/*
 * import Parent from './components/Events.js';
 * render(Parent);
 */

/* 
 * import MyInput from './components/MyInput.js';
 * render(MyInput, {
 *   state: {name: 'Marko', email: 'marko@abv.bg', password:''},
 *   render
 * });
 */
