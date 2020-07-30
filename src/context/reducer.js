import {DATA, ERROR, PAGE, LOAD, ADD, REMOVE, UPDATE} from './actions';

export const crud = (state, action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.data
      ];
    case UPDATE:
      return state.map(user => 
        user.id === action.id ? action.data : user
      )
    case REMOVE:
      return state.filter(user => user.id !== action.id);
    default:
      return state
  }
}

export const newsfeed = (state, action) => {
  switch (action.type) {
    case DATA:
      if (state.articles) {
        return {
          ...state,
          articles: [...state.articles, ...action.payload.articles]
        }
      }
      return {...action.payload, ...state}
    case ERROR:
      return {
        ...action.payload
      }
    case PAGE:
      return {
        ...state,
        page: action.page
      }
    case LOAD:
      return {
        ...state,
        isLoad: action.isLoad
      }
    default:
      return state
  }
}