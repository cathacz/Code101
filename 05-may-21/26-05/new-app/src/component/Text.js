function Text() {
  return (
    <div>
      text text text text text text text text text text text text text text text
      text text text text text text text text text text text text text text text
    </div>
  );
}

function Hej(props) {
  return (
    <div className="hej">
      Hej, it's you, {props.userName}! <br /> I am {props.emo} to see you!{" "}
    </div>
  );
}

function Question(props) {
  return <div>{props.question}</div>;
}
//export default Text;

export { Text, Hej, Question };
