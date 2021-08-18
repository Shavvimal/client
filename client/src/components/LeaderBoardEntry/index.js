import React from 'react';
import './style.css'


const LeaderBoardEntry = ({ name, score, difficulty }) => {



    return (
        <div className="flex flex-row">
            <p> Name: {name}
                Score: {score}
                difficulty: {difficulty}
            </p>
        </div >

    );
}

export default LeaderBoardEntry;
