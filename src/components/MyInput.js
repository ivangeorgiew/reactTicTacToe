import React from 'react';
import PropTypes from 'prop-types';

const MyInput = function(props) {
  const handleChange = function(field, event) {
    return props.render(MyInput, {
      state: Object.assign(
        props.state,
        {[field]: event.target.value}
      ),
      render: props.render
    });
  };

  const handleSubmit = function(event) {
    event.preventDefault();
    return alert(`Submitted form with such values:
      name: ${props.state.name},
      email: ${props.state.email},
      password: ${props.state.password}
    `);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>{props.state.name}</label>
      <br/>
      <input
        placeholder="Name"
        type='text'
        name='name'
        value={props.state.name}
        onChange={handleChange.bind(this, 'name')}
      />
      <br/><br/>

      <label>{props.state.email}</label>
      <br/>
      <input
        placeholder="Email"
        type='text'
        name='email'
        value={props.state.email}
        onChange={handleChange.bind(this, 'email')}
      />
      <br/><br/>

      <label>Password</label>
      <br/>
      <input
        placeholder='Password'
        type='password'
        name='password'
        value={props.state.password}
        onChange={handleChange.bind(this, 'password')}
      />
      <br/><br/>

      <input type='submit' value='Log In'/>
    </form>
  );
};

MyInput.propTypes = {
  state: PropTypes.object.isRequired,
  render: PropTypes.func.isRequired
}

export default MyInput;

