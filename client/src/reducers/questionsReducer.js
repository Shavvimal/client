const initState = {

    question_number: 0,
    score: 0

}

const questionsReducer = (state = initState, action) => {
    switch (action.type) {
        case '':
            return ({
                ...state,
            })
        default:
            return state;
    }
}

export default questionsReducer;