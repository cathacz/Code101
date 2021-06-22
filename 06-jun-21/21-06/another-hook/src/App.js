import React, { useState, useRef } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const userTextInput = useRef(null);
  const getMe = () => userTextInput.current.focus();
  const count = useRef(0);
  const changeBg = () =>
    (userTextInput.current.style.backgroundColor = "tomato");
  return (
    <React.Fragment>
      <input type="text" ref={userTextInput}></input>
      <button onClick={getMe}>Focus Me!</button>
      <button onClick={changeBg}>Change Me!</button>
      <button onClick={() => count.current++}>{count.current}</button>
      console.log(count.current)
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
    </React.Fragment>
  );
}

export default App;
