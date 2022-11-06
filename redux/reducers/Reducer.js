import { SET_DEVICE } from "../actions/actions"

const initialState = {
    device: ""
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
       
        case SET_DEVICE:
            
            return { ...state, device: action.data }

        default:
            return state
    }

}