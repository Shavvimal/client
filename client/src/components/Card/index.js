import React from 'react';
import './style.css'
import { Answer } from '../';

const Card = ({question, correctAnswer, incorrectAnswers}) => {

    console.log("hello from the card component")
    console.log(incorrectAnswers);

    // const renderOptions =() =>{
    //     incorrectAnswers.map((t,i) => {

    //         <Answer key={i} word={t} />

    //     })
    // } 

    return (
        <>
            <div className="border-4 rounded-lg mx-10 p-10 my-3 flex flex-col">
                <p className="text-right"> Score: </p>
                <h1> Question #</h1>
                <h2> {question} </h2>
                <p>Correct: {correctAnswer}  </p>

                {/* {renderOptions()} */}



            </div>

        </>

    );
}

export default Card;
