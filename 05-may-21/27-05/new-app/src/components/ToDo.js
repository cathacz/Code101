const ToDo = (props) => {
  const userToDo = props.list.map((toDo, i) => (
    <li key={i}>
      <input
        type="checkbox"
        defaultChecked={toDo.done}
        onChange={() => props(toDo.id)}
      />
      {toDo.title} <i onClick={() => props.remove(toDo.id)}>Nope</i>
    </li>
  ));
  return <ul>{userToDo}</ul>;
};

export default ToDo;
