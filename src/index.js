import React from "react";
import ReactDOM from "react-dom";

function HelloWorld(){
  return(
        <div>
          <Hello/> <World/>!!
        </div>
        );
}

function Hello(){
  return <span>Hello</span>
}

function World(){
  return <span>World</span>
}

/**function submitButton(){
  var buttonLabel = "Submit";
  return(
    <div>{buttonLabel}</div>
  );
}**/

ReactDOM.render(
  <HelloWorld/>, //JSX
  document.querySelector('#root')
);
