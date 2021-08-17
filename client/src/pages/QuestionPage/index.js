import React from 'react';
import { useSelector } from 'react-redux'; // New imports to work with Redux
import './styleHome.css'
import { Card } from '../../components'

const QuestionPage = () => {

    const results = useSelector(state => state.result);
    console.log(results)
    
    const renderCards = data => data.map((qn, i) => <Card question={qn.question} key={i} incorrectAnswers={qn.incorrectAnswers} correctAnswer={qn.correctAnswer} />)

    return (

        <>
            {renderCards(results)};
        </>


    )
}

export default QuestionPage;
