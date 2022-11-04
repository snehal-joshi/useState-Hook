import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [count, setCount] = useState(1233);
  console.log(count);

  function increase() {
    setCount(12);
  }
  // const rgb = [9, 132, 227];
  // console.log("red = " + rgb[0] + ", green = " + rgb[1] + ", blue = " + rgb[2]);

  // const [red, green, blue] = [9, 132, 227];
  // console.log("red = " + red + ", green = " + green + ", blue = " + blue);

  return ReactDOM.render(
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>,
    document.getElementById("root")
  );
}

export default App;
