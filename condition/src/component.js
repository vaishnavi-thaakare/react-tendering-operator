import React from "react"


const selection = "netflix"


const Component = () => {
    
  return    selection === "netflix" ? `You  are on netflix` : ` You are on other online platform` 
}



// condition
// 1]selection === "vaishnavi"
// 2]selection === "amazon"
// 3] selection === "netflix"

// const Component = () => {
//     if (selection === "vaishnavi") {
//         return ` you are now on netflix`
//     } else {
//         return ` you are now on amazon`
//     }

//     return (
//         <div> Conditional statement - if else statement</div>
        
        
//     )
// }




export default Component