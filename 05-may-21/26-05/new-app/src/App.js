// imports
import { Text, Hej } from "./component/Text";

let name = "Catha";
const fruits = ["Banana", "Apple", "Marille", "Orange", "Fig"];
const listItems = fruits.map((fruit, index) => <li key={index}>{fruit}</li>);
function App() {
  return (
    <div>
      <h1>Playing with React</h1>
      <Hej userName={name} emo="happy" fruitArr={fruits} />
      <Text />
      <Text />
      <Text />
      <ul>{listItems}</ul>
      {/* <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
