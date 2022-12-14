
import {GET_ROBOTS} from './actionRobots';
const initStateRobots = {
  robots: [],
}

export const reducer_robots = (state=initStateRobots,action={}) =>{
  switch (action.type) {
    case GET_ROBOTS:
      return {...state, robots:action.payload};
    default:
      return {...state};
  }
}
