import TreandingProducts from "./TredingProducts";
import LatestProducts from "./LatestProducts"
import Todos from "./Todos";
import Counter from "./Counter";

let title = "React Fundamentals";
let title1 = "React State"

export default function App() {
  return (
    <div>
      <h1>{title1}</h1>
      {/* <h1>{title}</h1> */}
      {/* <TreandingProducts /> */}
      {/* <LatestProducts/> */}
      {/* <Counter/> */}
      <Todos />
    </div>
  );
}


/* import React from "react";
const App = () => {
   const [allchecked, setAllChecked] = React.useState([]);
   function handleChange(e) {
      if (e.target.checked) {
         setAllChecked([...allchecked, e.target.value]);
      } else {
         setAllChecked(allchecked.filter((item) => item !== e.target.value));
      }
   }
   return (
      <div>
       
         <div>
            <input value = "One" type = "checkbox" onChange = {handleChange} />
            <span> One </span>
         </div>
         <div>
            <input value = "Two" type = "checkbox" onChange = {handleChange} />
            <span> Two </span>
         </div>       

      </div>
   );
};
export default App;  */