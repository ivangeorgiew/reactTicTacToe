import React from 'react';
import PropTypes from 'prop-types';




function MyInput (props) {

  function handleChange (field, event) {
    return props.render(Object.assign({...props}, {
      [field]: event.target.value,
    }));
  };




  function handleSubmit (event) {
    event.preventDefault();
    return alert(`Submitted form with such values:
      name: ${props.name},
      email: ${props.email},
      password: ${props.password}
    `);
  };




  return (
    <form onSubmit={handleSubmit}>
      <label>{props.name}</label>
      <br/>
      <input
        placeholder="Name"
        type='text'
        name='name'
        value={props.name}
        onChange={handleChange.bind(this, 'name')}
      />
      <br/><br/>

      <label>{props.email}</label>
      <br/>
      <input
        placeholder="Email"
        type='text'
        name='email'
        value={props.email}
        onChange={handleChange.bind(this, 'email')}
      />
      <br/><br/>

      <label>Password</label>
      <br/>
      <input
        placeholder='Password'
        type='password'
        name='password'
        value={props.password}
        onChange={handleChange.bind(this, 'password')}
      />
      <br/><br/>

      <input type='submit' value='Log In'/>
    </form>
  );
};




MyInput.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string,
  render: PropTypes.func.isRequired
}




export default MyInput;
