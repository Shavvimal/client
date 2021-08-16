import axios from 'axios';

const loading = userEntries => ({ type: 'LOADING', payload: userEntries }); // Can payload be an object??

const loadResult = ({ results: { quiz } }) => ({ 
    type: 'LOAD_RESULT',
    payload: { quiz }  // Need to destructure?
});

// Need two dispatch functions, one each for category and difficulty??
const getResult = ({ category, difficulty }) => {
    return async dispatch => {
        dispatch(loading(category, difficulty)); // Or need two dispatches?
        try {
            const quiz = await getQuiz(category, difficulty)
        } catch (err) {
            console.warn(err.message);
            dispatch({ type: 'SET_ERROR', payload: err.message });
        }
    }
}


// Helpers
const getQuiz = async userEntries => {
    try{
        const { data }  = await axios.get(`https://opentdb.com/api.php?amount=10&category=${userChoices.category}&difficulty=${userEntries.difficulty}&type=multiple`);

        const quizArray = data.results.map(el => {
            const questionTemp = el.question.replaceAll('&quot;', "'");
            const question = questionTemp.replaceAll('&#039;', "'");
            const correctAnswer = el.correct_answer;
            const incorrectAnswers = el.incorrect_answers.map(el => el.replaceAll('&#039;', "'"));
            return {question, correctAnswer, incorrectAnswers}});
        return quizArray;
    } catch(err) {
        if (data.status === 404) {
            throw Error ('Quiz not available, sorry')
        }
        throw new Error (err.message);
    }
}
