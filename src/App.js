import React from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const store = useSelector((state) => state);
  console.log("store", store);
  const dispatch=useDispatch();
  const increment = () => {
    dispatch({type:"ADD"})
  };
  return (
    <div>
      <h1> Count : 0 </h1>
      <button onClick={increment}> - </button>
      <button> + </button>
      <button>0</button>
    </div>
  );
}

export default App;
