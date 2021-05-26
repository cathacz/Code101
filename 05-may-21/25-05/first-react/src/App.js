function App() {
  // normal js stuff here – declaring variables, making functions and other stuff
  function handleSubmit(e) {
    e.preventDefault();
  }
  // after return jsx starts
  return (
    <div>
      <h1 className="header" id="h1">
        finally we are doing react
      </h1>
      {/* if using js in jsx always wit { } ! */}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Write something"></input>
      </form>
      <img src="" alt="random pic" />
      {/*  src always be in public/index.html in your head! meaning shorter way for imgs and fonts*/}
    </div>
  );
}

export default App;
