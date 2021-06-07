import { useEffect } from "react";
const Num = ({ setCount, log }) => {
  // >>> Run useEffect When a Prop Changes >>> in Num.js

  useEffect(() => {
    console.log("on Prop Change");
  }, [log]);
  return (
    <div>
      <button onClick={() => setCount((prevState) => prevState - 1)}>-</button>
    </div>
  );
};
export default Num;
