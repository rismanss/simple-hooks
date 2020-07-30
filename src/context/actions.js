export const DATA = 'DATA';
export const PAGE = 'PAGE';
export const LOAD = 'LOAD';
export const ERROR = 'ERROR';
export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const UPDATE = 'UPDATE';

export const add = (data) => {
  return {
    type: ADD,
    data
  }
}

export const update = (id, data) => {
  return {
    type: UPDATE,
    id,
    data
  }
}

export const remove = (id) => {
  return {
    type: REMOVE,
    id
  }
}

export const fetchData = (data) => {
  return {
    type: DATA,
    payload: data
  }
}

export function isError(isError) {
  return {
    type: ERROR,
    isError
  }
}

export function page(page) {
  return {
    type: PAGE,
    page
  };
}

export function load(isLoad) {
  return {
    type: LOAD,
    isLoad
  };
}