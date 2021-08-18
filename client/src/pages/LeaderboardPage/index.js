import React, { useState, useEffect } from "react";
import axios from 'axios'
import { LeaderBoardEntry } from '../../components'
import "./style.css";

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


  // If compareFunction(a, b) returns a value > than 0, sort b before a.
  // If compareFunction(a, b) returns a value < than 0, sort a before b.
  // If compareFunction(a, b) returns 0, a and b are considered equal

  function compare(a, b) {
    if (a.score > b.score) {
      return -1;
    }
    if (a.score < b.score) {
      return 1;
    }
    return 0;
  }



  const renderLeaderboard = (dataParam) => dataParam.sort(compare).map((t, i) => <LeaderBoardEntry key={i} place={i + 1} name={t.name} score={t.score} difficulty={t.difficulty} />)


  return (
    <>

      <div className='border rounded-xl bg-white  mt-20 w-11/12 h-5/6 m-auto px-10 py-5 shadow-xl flex flex-col justify-center text-center'>
        <h1 className=''>Quizzo Leaderboard </h1>

        <table class=" w-full mt-6 mx-auto table text-black border-separate space-y-4 z-2">
          <thead class="bg-purple-darker text-white">
            <tr>
              <th class="p-3">Place</th>
              <th class="p-3">Name</th>
              <th class="p-3">Score</th>
              <th class="p-3">Difficulty</th>
            </tr>
          </thead>
          <tbody>
            {renderLeaderboard(data)}
          </tbody>
        </table>



      </div>
    </>
  );
};

export default Leaderboard;
