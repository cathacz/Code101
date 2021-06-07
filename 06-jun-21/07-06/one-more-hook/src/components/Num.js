const Num = ({ setCount }) => {
  return (
    <div>
      <button onClick={() => setCount((prevState) => prevState - 1)}>-</button>
    </div>
  );
};
export default Num;
