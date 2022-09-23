import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './main.css';
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
    }).then((res) => {
      setUser(res.data);
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
      <div className='data'>
        {data.map((e) => (
          <div key={e.id}>
            <div className='flex'>
              <div className='gap'>
                <img className='image' src={e.owner.avatar_url} />
              </div>
              <div>
                <Link to={`/description/${e.name}`} style={{textDecoration:'none'}}>
                  <p>{e.name}</p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
