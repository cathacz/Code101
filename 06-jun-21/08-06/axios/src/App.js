import React, { useState, useEffect } from "react";
import axios from "axios";
import "./scss/main.scss";
import Loading from "./components/Loading";
import Country from "./components/Country";
const App = () => {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  function handleChange(e) {
    setUserInput(e.target.value);
  }

  //   State          Component
  if (loading) return <Loading />;
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={handleChange}
          placeholder="country?"
        />
        <button type="submit">Search</button>
      </form>
      <Country result={result} />
    </React.Fragment>
  );
};

export default App;
