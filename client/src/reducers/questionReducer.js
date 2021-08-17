const initState = {
  loading: false,
  questionIndex: 0,
  username: "",
  category: "",
  difficulty: "",
  result: [{ question: "", correctAnswer: "", incorrectAnswers: [] }],
  score: 0,
};

const questionReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOAD_QUIZ":
      return { ...state, result: action.payload, error: false };
    case "ADD_USERNAME":
      return { ...state, username: action.payload, error: false };
    case "ANSWER_SUBMIT":
      if (action.payload === state.result[questionIndex].correctAnswer) {
        return { ...state, score: state.score++, questionIndex: state.questionIndex++ };
      }
      return { ...state, questionIndex: state.questionIndex++ };

    case "SET_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default questionReducer;
