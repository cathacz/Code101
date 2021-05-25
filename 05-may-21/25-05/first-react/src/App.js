function App() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <h1 className="header" id="h1">
        finally we are doing react
      </h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Write something"></input>
      </form>
    </div>
  );
}

export default App;
