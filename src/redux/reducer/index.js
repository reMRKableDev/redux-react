/* initial state */
const initialState = {
  filter: "SHOW_ALL",
  tasks: [
    { id: 1, title: "Learn HTML", done: true },
    { id: 2, title: "Learn React", done: false },
    { id: 3, title: "Learn Redux", done: false }
  ]
};

// reducer which is sent to be held in redux store
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_FILTER":
      return {
        ...state,
        filter: action.filter
      };

    default:
      return state;
  }
};

export default reducer;
