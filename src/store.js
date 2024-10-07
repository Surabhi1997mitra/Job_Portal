import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { JobsReducer } from './reducers/jobs';
import { ErrorsReducer } from './reducers/errors';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        jobs: JobsReducer,
        errors: ErrorsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
)

console.log(store.getState());

export default store;