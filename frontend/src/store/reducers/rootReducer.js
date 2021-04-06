import { combineReducers } from 'redux'

import eventReducer from './eventReducer'
import rsoReducer from './rsoReducer'
import universityReducer from './universityReducer'


const rootReducer = combineReducers({
	events: eventReducer,
	rso: rsoReducer,
	university: universityReducer,
})

export default rootReducer
