import React from 'react';
import { useSelector } from 'react-redux'; // New imports to work with Redux
import './styleHome.css'
import { scrubStr, shuffle } from "../../actions"
import { Answer } from '../../components';


const QuestionCurrentPage = () => {


    const currentScore = useSelector((state) => state.score);
    const currentQuestionIndex = useSelector((state) => state.questionIndex);
    let results = useSelector(state => state.result);
    // let results2 = results.concat({ question: "What is my name?", correctAnswer: "Humza", incorrectAnswers: ["Shav", "Polina", "Sammie"] })

    const answers = shuffle([...results[currentQuestionIndex].incorrectAnswers, results[currentQuestionIndex].correctAnswer]);

    const renderOptions = (arr) => {
        let shuffledArr = shuffle(arr)
        return shuffledArr.map((t, i) => <Answer key={i} word={scrubStr(t)} />);
    }

    if (currentQuestionIndex < 9) {
        return (
            <div classNameName="border rounded-xl bg-white w-11/12 h-5/6 m-auto mt-20 px-10 py-5 shadow-xl">
                <div classNameName="flex flex-row justify-between ">
                    <h1 classNameName="">Question {currentQuestionIndex + 1} </h1>
                    <h3 classNameName=" ">Score {currentScore} </h3>
                </div>

                <br />
                <p className="font-semibold"> {scrubStr(results[currentQuestionIndex].question)} </p>
                <br />
                <p>Correct: {results[currentQuestionIndex].correctAnswer}  </p>
                <p>Incorrect: {results[currentQuestionIndex].incorrectAnswers}  </p>
                <p>Answers: {answers}</p>
                <p>Answer Buttons: {answers.map((t, i) => <Answer key={i} word={t} />)}</p>
                {/* {renderCards(results)}; */}
            </div>
        )
    } else {
        return (
            <div className="border rounded-xl bg-white  mt-20 w-11/12 h-5/6 m-auto px-10 py-5 shadow-xl">
                <div className="flex flex-row justify-between ">
                    <h1 className="">You're finished now, go Home </h1>
                    <h3 className=" ">Final Score: {currentScore} /10 </h3>
                </div>
            </div>
        )
    }
}


export default QuestionCurrentPage;
