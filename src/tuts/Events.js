import React from 'react';

export default Parent;




/* CHILP COMP */
function Child(props) {
  return (
    <div>
      <div>ChildComponent</div>
      <button onClick={props.sup}>Do Magic</button>
    </div>
  );
};




/* PARENT COMP */
function Parent(props) {
  return (
    <div>
      <Child sup={()=>alert('TADAAAH')} />
    </div>
  );
};
