const initState = {
  loading: false,
  category: "",
  difficulty: "",
  result: [{ question: "", correctAnswer: "", incorrectAnswers: [] }],
};

const questionReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOAD_QUIZ":
      return { ...state, results: action.payload, error: false };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default questionReducer;
