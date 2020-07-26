import React, { useEffect, useState } from 'react';
import './../App.css';
import api from './api.json';

const Index = () => {

  const url = api.url;
  const defaultData = {
    status: 'ok',
    totalResults: 0,
    articles: []
  }

  const [data, setData] = useState(defaultData);
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    setLoad(true);
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(prev => {
          return ({
            ...result,
            articles: [...prev.articles, ...result.articles]
          })
        });
      } catch (error) {
        setError(true);
      }
      setLoad(false);
    }
    fetchData();
  },[url, page]);

  console.log(data);
  return (
    <div className="container">
      <h1>News Feed</h1>
      {load && <p> Loading...</p>}
      {error && <p> ada error !!!</p>}
      <div>
        {data.articles.map((item, i) => (
          <li key={i}>
            <a href={item.url} target="blank">{item.title}</a>
            <p>{item.content}</p>
          </li>
        ))}
      </div>
      {data.articles.length < parseInt(data.totalResults) ? (
        <button disabled={load} onClick={() => setPage(prev => prev + 1)}>
          Load More
        </button>
      ) : null}
    </div>
  );
}

export default Index;
