import React from "react";

const component = (props) => {
  // const onSubmitHandler = (props) => {
  //   console.log(" OnSubmit handler from the componet is call out")
  //   props.vaishanvi()
  // }

  return (
    <div>
      <h1> It is Component</h1>
      <button onClick={props.vaishanvi}> Component Button </button>
    </div>
  );
};

export default component;
