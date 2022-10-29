/*eslint-disable no-unreachable */
const intialState = {
    comments: [],
    comment: {},
  };
  
const commentsReducer = (state = intialState, action) => {
    switch (action.type) {
      case "GET_ALL_COMMENT":
        return { ...state, comments: action.payload };
      case "ADD_COMMENT":
        return { ...state, comments: [...state.comments, action.payload] };
      case "REMOVE_COMMENT":
        let resultData = state.comments.filter(({ id }) => id !== +action.payload);
        return { ...state, comments: resultData };
      case "UPDATE_COMMENT":
        console.log(action.payload);
        let result = state.comments.filter(({ id }) => id !== +action.payload.id);
        console.log(result);
        return { ...state, comments: [...result, action.payload.data] };
      case "GET_COMMENT":
        return { ...state, comment: action.payload };
      default:
        return state;
    }
  };

  export default commentsReducer;
  