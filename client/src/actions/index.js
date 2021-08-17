import axios from 'axios';

const [quiz, setQuiz] = useState([]);
const [error, setError] = useState("");

let replaceAmp = (str) => {
    str = str.replaceAll("&quot;", "\"");
    str = str.replaceAll("&amp; ", " & ");
    str = str.replaceAll("&#039;", "'");
    return str
}


export const getQuiz =

    async (userChoices) => {
        try {
            setError(null);
            let { data } = await axios.get(`https://opentdb.com/api.php?amount=10&category=${userChoices.category}&difficulty=${userChoices.difficulty}&type=multiple`);

            if (!data.results.length) {
                setError("Sorry, no quizzes available!")
            }
            else {
                let quizArray = data.results.map(el => {

                    let question = replaceAmp(el.question);
                    let correctAnswer = el.correct_answer;
                    let incorrectAnswers = el.incorrect_answers.map(el => replaceAmp(el)); // an array
                    return { question, correctAnswer, incorrectAnswers };
                });
                setQuiz(quizArray);
                console.log(quizArray);
            }
        } catch (err) {
            console.warn(err.message);
            setError("Sorry, no quizzes available!");
        }
    }
