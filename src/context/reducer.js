import {DATA, ERROR, PAGE, LOAD} from './actions';

export const reducer = (state, action) => {
  console.log(action, '...action')
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