import React, { createContext, useReducer, useEffect, useMemo } from 'react';
import {newsfeed, crud} from './reducer';
import {fetchData, isError, load} from './actions';
import api from '../newsfeed/api.json';

// function for combine reducer
const combineReducers = (slices) => (state, action) =>
  Object.keys(slices).reduce(
    (acc, prop) => ({
      ...acc,
      [prop]: slices[prop](acc[prop], action),
    }),
    state
  );

export const Context = createContext();

const Provider = props => {
  const initialState = {
    newsfeed: {
      page: 1
    },
    crud: [
      {id: 1, name: 'risman', age: 27, status: false},
      {id: 2, name: 'ramli', age: 27, status: true}
    ]
  }
  const [state, dispatch] = useReducer(combineReducers({newsfeed, crud}), initialState);

  const store = useMemo(() => [state, dispatch], [state]);

  const getData = async () => {
    dispatch(load(true));
    try {
      const response = await fetch(`${api.url}&page=${state.newsfeed.page}`);
      const result = await response.json();
      dispatch(fetchData(result));
    } catch (error) {
      dispatch(isError(error));
    }
    dispatch(load(false));
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  },[state.newsfeed.page])
  
  return (
    <Context.Provider value = {store}>
      {props.children}
    </Context.Provider>
  );
}

export default Provider;