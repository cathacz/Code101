// imports
import { Text, Hej, Question } from "./component/Text";

let name = "Catha";
const fruits = ["Banana", "Apple", "Marille", "Orange", "Fig"];
const listItems = fruits.map((fruit, index) => <li key={index}>{fruit}</li>);

const questionArr = [
  "How are you?",
  "Your favorite place?",
  "Your favorite color?",
];
const listQuestions = questionArr.map((question, i) => (
  <li key={i}>
    {question}
    <br />
    <input type="text"></input>
  </li>
));

function App() {
  return (
    <div>
      <h1>Playing with React</h1>
      <Hej userName={name} emo="happy" fruitArr={fruits} />
      <Text />

      <Text />
      <Text />
      <p>Here are some fruits:</p>
      <ul>{listItems}</ul>
      {/* <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul> */}
      <Question />
      <ul className="questions">{listQuestions}</ul>
    </div>
  );
}

export default App;
