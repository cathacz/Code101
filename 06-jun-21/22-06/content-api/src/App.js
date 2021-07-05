import React from "react";
import { Data, DataContext } from "./context";
import Home from "./components/Home";

function App() {
  return (
    <DataContext.Provider value={Data}>
      <h1>Context</h1>
    </DataContext.Provider>
  );
}

export default App;
