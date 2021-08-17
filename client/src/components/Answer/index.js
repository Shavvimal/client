import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitAnswer } from "../../actions"
import './style.css'

const Answer = ({ word }) => {
    
    const dispatch = useDispatch();

    const sendAnswer = () => {
        dispatch(submitAnswer(word))
    }

    return (
        <button className="border mx-auto px-4 py-1 rounded-full bg-purple-500 text-white" onClick={sendAnswer}> {word}</button>

    );
}

export default Answer;
