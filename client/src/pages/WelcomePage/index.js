import React, {useEffect, useState}from "react";
import { UserForm } from "../../components";
import axios from "axios";

function WelcomePage(){

    const [ quiz, setQuiz] = useState([])
    const [ error, setError ] = usetate("");

    const getQuiz = async userChoices =>{
        try{
            setError(null);
            let { data } = await axios.get(`https://opentdb.com/api.php?amount=10&category=${userChoices.category}&difficulty=${userChoices.difficulty}&type=multiple`);
            if(!data.results.length){
                setError("Sorry, no quizzes available!")
            }
            else{
                const quizArray = data.results.map(el => {

                    let question = el.question;
                    let correctAnswer = el.correct_answer;
                    let incorrectAnswers = el.incorrect_answers; //should be an array
                    return {question, correctAnswer, incorrectAnswers};
                })
                setQuiz(quizArray);
            }
        }
        catch(err){
            console.warn(err.message);
            setError("Sorry, no quizzes available!")
        }
        
    }

    return(
        <>
            <UserForm getQuiz={getQuiz}/>
        </>
    )
}

export default WelcomePage;
