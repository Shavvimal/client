import axios from "axios";

export const loadQuiz = (category, difficulty) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
      );

      const target = [];
      let i = 0
      while (i < 10) {
        target.push({ question: data.results[i].question, correctAnswer: data.results[i].correct_answer, incorrectAnswers: data.results[i].incorrect_answers })
        i++
      }
      dispatch({
        type: "LOAD_QUIZ",
        payload: target
      });
    } catch (err) {
      console.warn(err.message);
      dispatch({
        type: "SET_ERROR",
        payload: err.message,
      });
    }
  };
};

export const addUsername = (username) => ({
  type: "ADD_USERNAME",
  payload: username,
});

export const submitAnswer = (submittedAnswer) => ({
  type: "ANSWER_SUBMIT",
  payload: submittedAnswer,
});



// Helper scrubber function
export const scrubStr = (str) => {
  const cleanStr = str
    .replaceAll("&quot;", "'")
    .replaceAll("&#039;", "'")
    .replaceAll("&eacute;", "e")
    .replaceAll("&amp; ", " & ");
  return cleanStr;
};

//Helper Shuffle function - not working
export const shuffle = (arr) => {
  let c = arr.length; 
  let rand; 
  while (c !== 0) {
    rand = Math.floor(Math.random() * c); 
    c--; 
    [arr[c], arr[rand]] = [arr[rand], arr[c]];
  }
  return arr;
};