const initState = { loading: false, 
                    category: "", 
                    difficulty: "", 
                    result: [
                                { question: "",
                                correctAnswer: "",
                                incorrectAnswers: []
                                }
                                                        ]
};

const Reducer = (state=initState, action) => {
    switch(action.type) {
        case 'LOAD_QUIZ':
            return { ...state, results: action.payload, error: false};
        case 'SET ERROR':
            return { ...state, error: action.payload };
        default:
            return state;
    }
}

export default Reducer;