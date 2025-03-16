import React from "react";

function ButtonGroup(btnName1, btnURL1, btnName2, btnURL2) {
  return (
    <div className="button-group btn-group-2">
      <a href="https://moceanapi.com/developer/libraries">
        <button>{btnName1}</button>
      </a>
      <a href="https://dashboard.moceanapi.com/register">
        <button>Try for free</button>
      </a>
    </div>
  );
}

export default ButtonGroup;
