import React from 'react';
import { loadQuiz } from "../../actions";
import { useSelector } from 'react-redux'; // New imports to work with Redux
import './styleHome.css'
import { Card } from '../../components'

const QuestionPage = () => {

    const results = useSelector(state => state.result);
    
    console.log(results)
    

    const handleClick = () =>{
        console.log("click!")
        renderCards(results)
    }

    const renderCards = data => data.map((qn, i) => <Card question={qn.question} key={i} incorrectAnswers={qn.incorrectAnswers} correctAnswer={qn.correctAnswer} />)

    return (

        <>
            <button onClick={handleClick}>play game </button>
            {/* {renderCards()}; */}
        </>


    )
}

export default QuestionPage;
