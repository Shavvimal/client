import React, { useState, useEffect } from "react";
import axios from 'axios'
import { LeaderBoardEntry } from '../../components'

const Leaderboard = () => {



  const [data, setData] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    async function leaderboardScores() {
      try {
        const result = await axios.get(
          `http://localhost:8080/leaderboard`
        )
        setData(result.data.leaderboard)
      }
      catch (err) { setError(err.message) }
    } leaderboardScores()
  }, []);



  const renderLeaderboard = (dataParam) => dataParam.map((t) => <LeaderBoardEntry name={t.name} score={t.score} difficulty={t.difficulty} />)


  return (
    <>
      <div className='border rounded-xl bg-white  mt-20 w-11/12 h-5/6 m-auto px-10 py-5 shadow-xl flex flex-col justify-center text-center'>
        <h1 className=''>Welcome to the Leaderboard </h1>
        {renderLeaderboard(data)}

      </div>
    </>
  );
};

export default Leaderboard;
