import React, { useContext } from 'react';
import { Context } from '../context/provider';
import './../App.css';
import { page } from '../context/actions';

const Index = () => {
  const [state, dispatch] = useContext(Context);
  console.log(state,'...statex');

  return (
    <div className="container">
      <h1>News Feed</h1>
      {state.isLoad && <p> Loading...</p>}
      {state.status !== 'ok' && state.message}
      <div>
        {state.articles && state.articles.map((item, i) => (
          <li key={i}>
            <a href={item.url} target="blank">{item.title}</a>
            <p>{item.content}</p>
          </li>
        ))}
      </div>
      {state.articles && state.articles.length < parseInt(state.totalResults) ? (
        <button disabled={state.isLoad} onClick={() => dispatch(page(parseInt(state.page) + 1))}>
          Load More
        </button>
      ) : null}
    </div>
  );
}

export default Index;
