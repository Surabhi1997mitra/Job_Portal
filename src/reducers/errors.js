import { RESET_ERRORS, SET_ERRORS } from "../types/errors";

export const ErrorsReducer = (state = {}, action) => {
    switch(action.type) {
        case SET_ERRORS: {
            let newState = Object.assign({}, state);
            newState.error = action.error
            return newState
        }
        case RESET_ERRORS: {
            return {}
        }
        default: return state;
    }
}