import {combineReducers} from 'redux'
import {trials as trialsReducer} from './TrialsReducer'
import {register as registerUserReducer} from './RegisterReducer'

const rootReducer = combineReducers({
    trialsReducer,
    registerUserReducer
});

export default rootReducer