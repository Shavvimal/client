import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // New imports to work with Redux
import { getResult } from '../../actions';

import './styleHome.css'
import { NavLink } from 'react-router-dom';
import { Card } from '../../components'
import axios from 'axios';

const Home = () => {

    const [qnsState, setQns] = useState([]);

    useEffect(() => fetchQns(), [])


    const fetchQns = async () => {
        try {
            let qns = await axios.get(`https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple`);
            console.log(qns);
            const array = qns.data.results.map(qns => {
                let question = qns.question;
                let correct_answer = qns.correct_answer;
                let incorrect_answers = qns.incorrect_answers;

                return { question, incorrect_answers, correct_answer }
            })
            setQns(array)
        }
        catch (err) {
            console.warn(err);
        }
    }


    const renderCards = data => data.map((qn, i) => <Card question={qn.question} key={i} incorrect_answers={qn.incorrect_answers} correct_answer={qn.correct_answer} />)

    return (

        <>

            {renderCards(qnsState)};
        </>


    )
}

export default Home;
