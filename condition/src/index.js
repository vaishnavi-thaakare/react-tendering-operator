import React from "react";
import ReactDOM from "react-dom";
import Component from "./component";
import First from "./Component/First";
import Second from "./Component/Second";

const App = () => {
  const onClickHandler = () => {
    alert(" I am from main app");
  };
  return (
    <div>
      <Component vaishanvi={onClickHandler} />
      <Second neha={onClickHandler} />
      <First pratik={onClickHandler} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

// {/* <Component name="vaishnavi">
// <div>
// //   <label htmlFor=""> Enter your firstName</label>
// //   <button> Update</button>
// // </div> */
// // }
// // <First />;
// // // </Component> */} */}

// // const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// //
// // console.log(obj);
// // console.log(obj.firstName);
// // console.log(obj.lastName);
// // console.log(array);

// // const arrayObj = [
// //   {
// //     firstName: " Vaishnavi",
// //     lastName: " Thakare",
// //   },
// //   {
// //     firstName: "nikita",
// //     lastName: " Sawant",
// //   },
// //   {
// //     firstName: " Pranjali",
// //     lastName: "Gawande",
// //   },
// //   {
// //     firstName: "Payal",
// //     lastName: "Gandhi",
// //   },
// //   {
// //     firstName: "kanika",
// //     lastName: "Raut",
// //   },
// // ];
// // console.log(arrayObj[0].firstName);

// // const data = [
// //   { firstName: "Vaishnavi", lastName: "Thakare" },
// //   { firstName: "Nikita", lastName: "Sawant" },
// // ];
// // console.log(data.firstName)
