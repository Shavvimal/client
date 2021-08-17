import React from 'react';
import './style.css'
import { Answer } from '../';
import { shuffle } from "../../actions"

const Card = ({ question, correctAnswer, incorrectAnswers }) => {

    const answers = [...incorrectAnswers, correctAnswer];

    const renderOptions = (arr) => {
        let shuffledArr = shuffle(arr)
        return shuffledArr.map((t, i) => <Answer key={i} word={t} />);
    }

    return (
        <>
            <div className="border bg-white shadow-xl rounded-lg mx-10 p-10 my-3 flex flex-col leading-9 ">
                <p className="text-right"> Score: </p>
                <h1> Question #</h1>
                <h2> {question} </h2>
                <p>Correct: {correctAnswer}  </p>
                <p>Incorrect: {incorrectAnswers}  </p>
                <p>Answers: {answers}</p>

                <p>Shuffled answers:</p>
                <div class="flex flex-col justify-between">
                    {renderOptions([...answers])}
                </div>


            </div>

        </>

    );
}

export default Card;
