import React, { useEffect, useRef, useState } from 'react';
import './style.css'
import { Answer } from '../';

const Card = ({ question, correct_answer, incorrect_answers }) => {

    const shuffle = (arr) => {
        let c = arr.length, rand;
        while (0 !== c) {
            rand = Math.floor(Math.random() * c);
            c--;
            [arr[c], arr[rand]] = [
                arr[rand], arr[c]];
        }
        return arr;
    }


    let replaceAmp = (str) => {
        str = str.replaceAll("&quot;", "\"");
        str = str.replaceAll("&amp; ", " & ");
        str = str.replaceAll("&#039;", "'");
        return str
    }

    const renderOptions = () => shuffle((incorrect_answers.concat(correct_answer))).map((t) => <Answer key={t} word={t} />)

    return (
        <>
            <div className="border-4 rounded-lg mx-10 p-10 my-3 flex flex-col">
                <p className="text-right"> Score: </p>
                <h1> Question #</h1>
                <h2> {replaceAmp(question)} </h2>
                <p>Correct: {correct_answer}  </p>

                {renderOptions()}



            </div>

        </>

    );
}

export default Card;
