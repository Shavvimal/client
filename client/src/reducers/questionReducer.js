
const initState = {
  loading: false,
  questionIndex: 10,
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
      if (action.payload === state.result[state.questionIndex].correctAnswer) {
        return { ...state, score: state.score + 1, questionIndex: state.questionIndex + 1 };
      }
      return { ...state, questionIndex: state.questionIndex + 1 };

    case "SET_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

// type: "LOAD_QUIZ",
// payload: [{question: "What is my name?", correctAnswer:"Humza", incorrectAnswers:["Shav", "Polina", "Sammie"]}]

// type: "ANSWER_SUBMIT",
// payload: "Humza"



export default questionReducer;
