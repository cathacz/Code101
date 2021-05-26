import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState("");

  //super important
  function handleChange(e) {
    setUserInput(e.target.value);
  }
  // super important
  function handleSubmit(e) {
    e.preventDefault();
  }
  const [clicks, setClicks] = useState(10);
  function increment() {
    setClicks((prevState) => prevState - 1);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={handleChange}
          placeholder="Write something nice"
        ></input>
        <input type="submit" value="Add" />
      </form>

      <ul>
        <li> {userInput.trim()}</li>
      </ul>

      <p>you clicked {clicks} times!</p>
      <button onClick={increment}>Click me</button>
    </div>
  );
}

export default App;
