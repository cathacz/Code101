// imports
import { Text, Hej } from "./component/Text";

let name = "Catha";

function App() {
  return (
    <div>
      <h1>Playing with React</h1>
      <Hej userName={name} />
      <Text />
      <Text />
      <Text />
    </div>
  );
}

export default App;
