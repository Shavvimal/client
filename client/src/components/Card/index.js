import React from 'react';
import './style.css'
import { Answer } from '../';
import { shuffle } from "../../actions"

const Card = ({question, correctAnswer, incorrectAnswers}) => {

    console.log("hello from the card component")
    // console.log(incorrectAnswers);

    const answers = [...incorrectAnswers, correctAnswer];

    const renderOptions =(arr) =>{
        let test = shuffle(arr)
        
        console.log("shuffle");
        console.log(test);

        return test;

        // test.map((t, i) =>{


            


        // });
        
        // incorrectAnswers.map((t,i) => {

        //     <Answer key={i} word={t} />

        // })
    } 

    return (
        <>
            <div className="border-4 rounded-lg mx-10 p-10 my-3 flex flex-col">
                <p className="text-right"> Score: </p>
                <h1> Question #</h1>
                <h2> {question} </h2>
                <p>Correct: {correctAnswer}  </p>
                <p>Incorrect: {incorrectAnswers}  </p>
                <p>Answers: {answers}</p>

                <p>Shuffled answers: {renderOptions([...answers])}</p>



            </div>

        </>

    );
}

export default Card;
