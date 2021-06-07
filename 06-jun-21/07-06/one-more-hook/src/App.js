import React, { useState, useEffect } from "react";
import Num from "./components/Num";

function App() {
  const [count, setCount] = useState(0);
  const [log, setLog] = useState(0);
  // >>> Stop useEffect from running on every render > same as only run once

  useEffect(() => {
    console.log("Stop");
  }, []);
  // >>>  Only Run Once, on Mount :)

  useEffect(() => {
    console.log("Only Once");
  }, []);

  //  >>> Run useEffect on State Change :)

  useEffect(() => {
    console.log("on State Change");
  }, [count]); // the count is the state in this case

  // >>> Run useEffect When a Prop Changes >>> in Num.js

  useEffect(() => {
    console.log("on Prop Change");
  }, [count]);

  return (
    <React.Fragment>
      <Num setCount={setCount} />
      <button onClick={() => setCount(count + 1)}>+</button>

      <h3>
        {count} {log}
      </h3>
    </React.Fragment>
  );
}

export default App;
