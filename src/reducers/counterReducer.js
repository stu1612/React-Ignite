export const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_1":
      return { ...state, count: state.count + 1 };
    case "DECREMENT_1":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
