export const DATA = 'DATA';
export const PAGE = 'PAGE';
export const LOAD = 'LOAD';
export const ERROR = 'ERROR';

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