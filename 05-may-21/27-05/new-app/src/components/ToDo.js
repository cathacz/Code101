const ToDo = (props) => {
  const userToDo = props.list.map((toDo, i) => (
    <li key={i}>
      <div>
        {""}
        <input
          type="checkbox"
          defaultChecked={toDo.done}
          onChange={() => props.check(toDo.id)}
        ></input>
        {toDo.title}
      </div>
      <div className="buttons">
        {" "}
        <i onClick={() => props.remove(toDo.id)}>Remove</i>
        <i onClick={() => props.remove(toDo.id)}>Skip</i>
      </div>
    </li>
  ));
  return <ul>{userToDo}</ul>;
};

export default ToDo;
