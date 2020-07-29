import React, { createContext, useReducer, useEffect } from 'react';
import {reducer} from './reducer';
import {fetchData, isError, load} from './actions';
import api from '../newsfeed/api.json';

export const Context = createContext();

const Provider = props => {
  const initialState = {
    page: 1
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  const getData = async () => {
    dispatch(load(true));
    try {
      const response = await fetch(`${api.url}&page=${state.page}`);
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
  },[state.page])
  
  return (
    <Context.Provider value = {[state, dispatch]}>
      {props.children}
    </Context.Provider>
  );
}

export default Provider;