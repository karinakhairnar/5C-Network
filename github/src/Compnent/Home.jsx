import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Home = () => {
  const [data, setUser] = useState(null);
  const [text, setText] = useState();
  const [para, setPara] = useState({});

  useEffect(() => {
    getUsers(para);
  }, [para]);
  const getUsers = () => {
    return axios({
      url: `https://api.github.com/users/${text}/repos`,
    })
      .then((res) => {
        setUser(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  console.log(data);
  const handleClick = () => {
    setPara({
      ...para,
    });
  };
  return (
    <div>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={handleClick}>Search</button>
      </div>
      <div>
        {data.map((e) => (
          <div key={e.id}>
            <p>{e.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
