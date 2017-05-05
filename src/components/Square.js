import React from 'react';
import PropTypes from 'prop-types';
import './../index.css';




/* SQUARE COMPONENT */
function Square (props) {
  return (
    <button className="square" onClick={props.handleClick}>
      {props.value}
    </button>
  );
}




/* PROP TYPES */
Square.propTypes = {
  value: PropTypes.string,
  handleClick: PropTypes.func.isRequired
};




export default Square;
