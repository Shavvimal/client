import React, { useState } from "react";
import { loadQuiz } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
function UserForm() {

    const [username, setUsername] = useState("");
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const dispatch = useDispatch();
    const history =useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        // const quizRequest = { category, difficulty };
        dispatch(loadQuiz(category, difficulty));
        history.push("/QuestionPage")
    };

    const updateUsername = (e) => {
        const input = e.target.value;
        setUsername(input);
    };

    const updateCategory = (e) => {
        const input = e.target.value;
        setCategory(input);
    };

    const updateDifficulty = (e) => {
        const input = e.target.value;
        setDifficulty(input);
    };

    return (
        <form role='form' onSubmit={handleSubmit}>
            <label htmlFor='username'>Username</label>
            <input
                id='username'
                type='text'
                onMouseOver={(e) => (e.target.placeholder = "")}
                onMouseOut={(e) => (e.target.placeholder = "Enter a username...")}
                value={username}
                onChange={updateUsername}
            />
            <label htmlFor='categorySelect'>Category</label>
            <select name='category' id='categorySelect' required onChange={updateCategory}>
                <option value=''>--Please choose an option--</option>
                <option value='9'>General Knowledge</option>
                <option value='31'>Anime and Manga</option>
                <option value='10'>Books</option>
                <option value='11'>Film</option>
                <option value='22'>Geography</option>
                <option value='23'>History</option>
                <option value='12'>Music</option>
                <option value='17'>Science and Nature</option>
                <option value='14'>Television</option>
                <option value='15'>Video Games</option>
            </select>
            <label htmlFor='difficultySelect'>Difficulty</label>
            <select name='difficulty' id='difficultySelect' required onChange={updateDifficulty}>
                <option value=''>--Please choose an option--</option>
                <option value='easy'>Easy</option>
                <option value='medium'>Medium</option>
                <option value='hard'>Hard</option>
            </select>
            <input type='submit' value='Submit' />
        </form>
    );
}
export default UserForm;