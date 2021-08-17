import React from 'react';
import { useSelector } from 'react-redux'; // New imports to work with Redux
import './styleHome.css'
import { Card } from '../../components'
import { scrubStr } from "../../actions"

const QuestionPage = () => {

    const results = useSelector(state => state.result);
      
    const renderCards = data => data.map((qn, i) => <Card question={scrubStr(qn.question)} key={i} incorrectAnswers={qn.incorrectAnswers.map(el => scrubStr(el))} correctAnswer={scrubStr(qn.correctAnswer)} />)

    return (

        <>
            {renderCards(results)};
        </>


    )
}

export default QuestionPage;
