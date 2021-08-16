const initState = { username: "", category: "", difficulty: "", result: {quiz: []}, loading: false };

const Reducer = (state=initState, action) => {
    switch(action.type) {
        case 'LOADING':
            return { ...state, result: action.payload, loading: true };
        case 'LOAD_QUIZ':
            return { ...state, result: action.payload, loading: false, error: false};
        case 'SET ERROR':
            return { ...state, error: action.payload, loading: false};
        default:
            return state;
    }
}

export default Reducer;