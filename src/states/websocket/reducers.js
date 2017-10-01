const initialState = {
  message: ""
};

const reducer = (state = initialState, payload) => {
  switch (payload.type) {
    case "test": {
      console.log(payload);
      return {
        ...state,
        message: JSON.parse(payload.message)
      };
    }
    default:
      return state;
  }
};

export default reducer;
