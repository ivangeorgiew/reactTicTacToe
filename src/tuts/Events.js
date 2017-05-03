import React from 'react';

const Child = function(props) {
  return (
    <div>
      <div>ChildComponent</div>
      <button onClick={props.sup}>Do Magic</button>
    </div>
  );
};

const Parent = function(props) {
  const performMagic = function() {
    return alert('TADAAAH');
  };

  return (
    <div>
      <Child sup={performMagic} />
    </div>
  );
};

export default Parent;
