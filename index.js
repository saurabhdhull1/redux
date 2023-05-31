const BUY_CAKE = "BUY_CAKE";

// action creator function
const buycake = () => {
  return;
  // Action
  {
    type: BUY_CAKE;
    info: "first action";
  }
};

// initial state
const initialstate = () => {
  return {
    totalcake: 10,
  };
};

// Reducer
const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        totalcake: state.totalcake - 1,
      };
    default:
      return state;
  }
};
