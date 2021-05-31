import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const List = (props) => {
  const [userInput, setUserInput] = useState("");
  function handleChange(e) {
    setUserInput(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(uuidv4());
    if (userInput.length) {
      props.setList((prevState) => [
        ...prevState,
        { id: uuidv4(), title: userInput.trim(), done: false },
      ]);
      setUserInput("");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={userInput} onChange={handleChange} />
      <input type="submit" value="Add" />
    </form>
  );
};

export default List;
