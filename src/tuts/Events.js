import React from 'react';




function Child (props) {
  return (
    <div>
      <div>ChildComponent</div>
      <button onClick={props.sup}>Do Magic</button>
    </div>
  );
};




function Parent (props) {
  return (
    <div>
      <Child sup={()=>alert('TADAAAH')} />
    </div>
  );
};




export default Parent;
