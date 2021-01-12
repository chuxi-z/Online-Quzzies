import { SET_QUESTION } from "./action-type"

const init = {
    questionList: []
}

function reducer(state=init, action){
    switch(action.type){
        case SET_QUESTION:
            state.questionList = action.data
            return {...state}
            // return {questionList: action.data}
        default:
            return state
    }
}

export default reducer