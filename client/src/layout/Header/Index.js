import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './style.css'

const Header = () => {
    const history = useHistory();
    return (
        <nav> 
        <NavLink className="homeLink" exact to="/">Home</NavLink>
        <NavLink className="leaderBoard" exact to="/">LeaderBoard</NavLink>
        {/* <button onClick={history.goBack}>Bach</button> */}
        </nav>

    );
}

export default Header;
