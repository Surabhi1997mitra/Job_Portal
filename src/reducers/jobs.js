import { LOAD_MORE_JOBS, SET_JOBS } from "../types/jobs";

export const JobsReducer = (state = [], action) => {
    switch(action.type) {
        case SET_JOBS: {
            const newState = action.jobs
            return newState;
        } 
        case LOAD_MORE_JOBS: {
            const newState = [...state, ...action.jobs]
            return newState;
        }
        default: {
            return state;
        }
    }
}