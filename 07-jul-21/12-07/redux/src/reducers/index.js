// step TWO creating ALL reducers
const allReducers = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "CHANGE_NAME":
      return { ...state, userNamer: action.payload };
    default:
      return state;
  }
};
export default allReducers;
