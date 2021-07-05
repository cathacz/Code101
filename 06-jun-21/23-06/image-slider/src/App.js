import { useState } from "react";
import Home from "./components/Home.js";

function App() {
  const arr = [
    "https://picsum.photos/200",
    "https://picsum.photos/300",
    "https://picsum.photos/500",
  ];
  const [val, setVal] = useState(0);
  return (
    <div className="slider">
      <button onClick={() => setVal(val + 1)} disabled={arr.length - 1 == val}>
        ⬅
      </button>
      <Home item={arr[val]} />
      <button onClick={() => setVal(val - 1)} disabled={val == 0}>
        ➡
      </button>
    </div>
  );
}

export default App;
