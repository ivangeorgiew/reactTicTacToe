import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Game } from './components/Game';




/* RENDER */
function render(Comp, props={}) {
  return ReactDOM.render(
    <Comp {...props}/>,
    document.getElementById('root')
  );
};




/* RENDER GAME */
function renderGame(startSym, vsComp) {
  return render(Game, {
    history: [{board: Array(9).fill(null)}],
    stepNumber: 0,
    startSym,
    xIsNext: startSym === 'X',
    vsComp,
    render: render.bind(this, Game)
  });
};




/* INDEX COMP */
function Index(props) {
  return (
    <div className='status'>
      <h3> Choose symbol vs Player</h3>
      <button className='square'
        onClick={() => renderGame('X', false)}> X </button>
      <button className='square'
        onClick={() => renderGame('O', false)}> O </button>

      <h3>Choose symbol vs Computer</h3>
      <button className='square'
        onClick={() => renderGame('X', true)}> X </button>
      <button className='square'
        onClick={() => renderGame('O', true)}> O </button>
    </div>
  );
};




/* INITIAL RENDER */
render(Index);




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
 *   name: 'Marko',
 *   email: 'marko@abv.bg',
 *   password: '',
 *   render: render.bind(this, MyInput)
 * });
 */
