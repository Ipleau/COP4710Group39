import { combineReducers } from 'redux'

import eventReducer from './eventReducer'
// import rsoReducer from './rsoReducer'

const rootReducer = combineReducers({
	events: eventReducer,
	// rso: rsoReducer,
})

export default rootReducer
