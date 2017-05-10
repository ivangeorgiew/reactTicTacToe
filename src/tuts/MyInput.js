import React from 'react';
import PropTypes from 'prop-types';

export default MyInput;




/* TYPING */
function handleChange (props, field, event) {
  return props.render(Object.assign({...props}, {
    [field]: event.target.value,
  }));
};




/* ON SUBMIT */
function handleSubmit (event) {
  event.preventDefault();
  return alert(`Submitted form with such values:
    name: ${props.name},
    email: ${props.email},
    password: ${props.password}
  `);
};




/* PROP TYPES */
MyInput.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string,
  render: PropTypes.func.isRequired
}

/* MYINPUT COMP */
function MyInput (props) {
  return (
    <form onSubmit={handleSubmit}>
      <label>{props.name}</label>
      <br/>
      <input
        placeholder="Name"
        type='text'
        name='name'
        value={props.name}
        onChange={handleChange.bind(this, props, 'name')}
      />
      <br/><br/>

      <label>{props.email}</label>
      <br/>
      <input
        placeholder="Email"
        type='text'
        name='email'
        value={props.email}
        onChange={handleChange.bind(this, props, 'email')}
      />
      <br/><br/>

      <label>Password</label>
      <br/>
      <input
        placeholder='Password'
        type='password'
        name='password'
        value={props.password}
        onChange={handleChange.bind(this, props, 'password')}
      />
      <br/><br/>

      <input type='submit' value='Log In'/>
    </form>
  );
};
