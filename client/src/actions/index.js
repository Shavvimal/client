import axios from "axios";

export const loadQuiz = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "LOAD_QUIZ",
        payload: getQuiz,
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

// Helper function
export const getQuiz = async (category, difficulty) => {
  try {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
    );

    return data.results.map((el) => {
      scrubStr(el.question), scrubStr(el.correct_answer);
      el.incorrect_answers.map((el) => scrubStr(el));
    });
  } catch (err) {
    if (data.status === 404) {
      throw Error("Quiz not available, sorry");
    }
    throw new Error(err.message);
  }
};

// Helper scrubber function
export const scrubStr = (str) => {
  const cleanStr = str
    .replaceAll("&quot;", "'")
    .replaceAll("&#039", "'")
    .replaceAll("&eacute;", "e")
    .replaceAll("&amp; ", " & ");
  return cleanStr;
};

//Helper Shuffle function
export const shuffle = (arr) => {
  let c = arr.length,
    rand;
  while (0 !== c) {
    rand = Math.floor(Math.random() * c);
    c--;
    [arr[c], arr[rand]] = [arr[rand], arr[c]];
  }
  return arr;
};
