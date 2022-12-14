import {combineReducers} from 'redux';
import {SEARCH,GET_ROBOTS} from './actions';
import {reducer_robots} from './reducerRobots'

const initStateSerach = {
  text:''
}


export const reducer_seacrh = (state=initStateSerach,action={}) =>{
  switch (action.type) {
    case SEARCH:
      return {...state, text:action.payload};
    default:
      return {...state};
  }
}



export const rootReducer = combineReducers({
  reducer_seacrh,
  reducer_robots
})
export default rootReducer
