import React from "react";

const Button = (props) => {
    // console.log(props);

    let {handleClick} = props;
    console.log("Button for " , props.children);
    
    
  return (
    <div>
      <button onClick={handleClick}>{props.children}</button>
    </div>
  );
};

export default React.memo(Button);
