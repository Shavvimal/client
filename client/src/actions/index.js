import axios from 'axios';

const loading = userEntries => ({ type: 'LOADING', payload: userEntries }); // Can payload be an object??

const [ quiz, setQuiz] = useState([]);
    const [ error, setError ] = useState("");

    const getQuiz = async (userChoices) => {
        try{
            setError(null);
            let { data }  = await axios.get(`https://opentdb.com/api.php?amount=10&category=${userChoices.category}&difficulty=${userChoices.difficulty}&type=multiple`);

            if (!data.results.length){
                setError("Sorry, no quizzes available!")
            }
            else {
                let quizArray = data.results.map(el => {

                    let questionTemp = el.question.replaceAll('&quot;', "'");
                    let question = questionTemp.replaceAll('&#039;', "'");
                    let correctAnswer = el.correct_answer;
                    let incorrectAnswers = el.incorrect_answers.map(el => el.replaceAll('&#039;', "'")); // an array
                    return {question, correctAnswer, incorrectAnswers};
                    });
                    setQuiz(quizArray);
                    console.log(quizArray);
            }
        } catch(err) {
            console.warn(err.message);
            setError("Sorry, no quizzes available!");
        }
    }
