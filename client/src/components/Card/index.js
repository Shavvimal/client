import React, { useEffect, useRef, useState } from 'react';
import './style.css'
import { Answer } from '../';

import { shuffle, scrubStr } from "../../actions"
import { useSelector } from 'react-redux';

const Card = (question, correctAnswer, incorrectAnswers) => {

    // const shuffle = (arr) => {
    //     let c = arr.length, rand;
    //     while (0 !== c) {
    //         rand = Math.floor(Math.random() * c);
    //         c--;
    //         [arr[c], arr[rand]] = [
    //             arr[rand], arr[c]];
    //     }
    //     return arr;
    // }


    // let replaceAmp = (str) => {
    //     str = str.replaceAll("&quot;", "\"");
    //     str = str.replaceAll("&amp; ", " & ");
    //     str = str.replaceAll("&#039;", "'");
    //     return str
    // }

    // const incorrectAnswers = useSelector(state => state.result.);
    console.log(question, correctAnswer, incorrectAnswers);
    const renderOptions = () => shuffle((incorrectAnswers.push(correctAnswer))).map((t) => <Answer key={t} word={t} />)

    return (
        <>
            <div className="border-4 rounded-lg mx-10 p-10 my-3 flex flex-col">
                <p className="text-right"> Score: </p>
                <h1> Question #</h1>
                <h2> {question} </h2>
                <p>Correct: {correctAnswer}  </p>

                {renderOptions()}



            </div>

        </>

    );
}

export default Card;
