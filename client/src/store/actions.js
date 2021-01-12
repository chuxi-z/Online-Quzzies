import axios from 'axios'

import {SET_QUESTION} from './action-type'


let base_url = 'http://localhost:8080'

// export async function getQuestionAsync(dispatch, page=2){
//     let address = base_url + `/api/question?page=${page}`

//     let response = await axios.get(address)
//     dispatch(response.data)
// }


export function getQuestions(questionList){
    return {type: SET_QUESTION, data: questionList}
}



export const getQuestionAsync = (page) =>{
    return async dispatch =>{
        let address = base_url + `/api/question?page=${page}`
        let response = await axios.get(address)
        dispatch(getQuestions(response.data))
    }
}
