import React from "react";
import { add, display } from "./helpers";
// >>> function component: <<<
// function App() {
//   return <React.Fragment></React.Fragment>;
// }

// >>> class component <<<
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      isLogged: false,
      data: { name: "Catha", age: 31 },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  print = () => console.log("I am a ES6 function and I dont need to be bind");

  handleSubmit() {
    console.log("I need to be bind > connected to constructor");
  }

  render() {
    // render is a MUST in class based components
    this.newUser = () => console.log("I live inside the render function");
    return (
      <div>
        {" "}
        {display("3+7=")}
        {this.print()}
        {this.handleSubmit()}
        {this.newUser()}
        <h1>Hej there {this.state.data.name}</h1>
        <p>
          3+4=<b>{add(3, 4)}</b>
        </p>
      </div>
    );
  }
}
// export default App;
