import { INSERT, UPDATE_INDEX, UPDATE,DELETE } from './actions'
import { addToLocalStorage,getFromLocalStorage } from '../helpers/storage'

const initState = {
  list: getFromLocalStorage('trx'),
  currentIndex: -1
}


export const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case INSERT:
      const newlist = [...state.list]
      newlist.push(action.payload);
      console.log(newlist);
      addToLocalStorage('trx',newlist);
      return { ...state, list: newlist, currentIndex: -1 }

    case UPDATE_INDEX:
      console.log('currentIndex=>', action.payload);
      return { ...state, currentIndex: action.payload }

    case UPDATE:
      state.list[state.currentIndex] = action.payload;
      addToLocalStorage('trx',[...state.list]);
      return { ...state ,list:[...state.list],currentIndex:-1}
    case DELETE:
      state.list.splice(action.payload,1)
      addToLocalStorage('trx',[...state.list]);
      return{ ...state,list:[...state.list],currentIndex:-1}
    default:
      return { ...state }
  }
}
